// Abstract Button & Checkbox
class Button {
  render() {
    throw new Error("You must implement render!");
  }
}

class Checkbox {
  render() {
    throw new Error("You must implement render!");
  }
}

// Concreate Button & Checkbox === LIGHT THEME
class LightButton extends Button {
  render() {
    console.log(`[LIGHT] Button rendered!`);
  }
}

class LightCheckbox extends Checkbox {
  render() {
    console.log(`[LIGHT] Checkbox rendered!`);
  }
}

// Concreate Button & Checkbox === DARK THEME
class DarkButton extends Button {
  render() {
    console.log(`[DARK] Button rendered!`);
  }
}

class DarkCheckbox extends Checkbox {
  render() {
    console.log(`[DARK] Checkbox rendered!`);
  }
}

// Factory ~~
class LightThemeFactory {
  createButton() {
    return new LightButton();
  }
  createCheckbox() {
    return new LightCheckbox();
  }
}

class DarkThemeFactory {
  createButton() {
    return new DarkButton();
  }
  createCheckbox() {
    return new DarkCheckbox();
  }
}

// Sử dụng!
const renderUI = (factory) => {
  const btn = factory.createButton();
  const checkbox = factory.createCheckbox();

  btn.render();
  checkbox.render();
};

// Dùng Light Theme
console.log(`=== LIGHT THEME ===`);
renderUI(new LightThemeFactory());
// Dùng Dark Theme
console.log(`=== DARK THEME ===`);
renderUI(new DarkThemeFactory());
