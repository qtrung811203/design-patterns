class Notification {
  send(message) {
    throw new Error("You must implement send()");
  }
}

class SlackNotification extends Notification {
  send(message) {
    console.log(`SLACK NOTIFICATION::: send ::: ${message}`);
  }
}

class DiscordNotification extends Notification {
  send(message) {
    console.log(`DISCORD NOTIFICATION::: send ::: ${message}`);
  }
}

//FACTORY
class NotificationFactory {
  createNotification() {
    throw new Error("You must implement createNotification()");
  }

  notify(message) {
    const notification = this.createNotification();
    notification.send(message);
  }
}

class SlackNotificationFactory extends NotificationFactory {
  createNotification() {
    return new SlackNotification();
  }
}

class DiscordNotificationFactory extends NotificationFactory {
  createNotification() {
    return new DiscordNotification();
  }
}

// Client Usage
const slackNoti = new SlackNotificationFactory();
slackNoti.notify("Hello from Slack");

const discordNoti = new DiscordNotificationFactory();
discordNoti.notify("Hello from Discord");

/**
 * Result
 * SLACK NOTIFICATION::: send ::: Hello from Slack
 * DISCORD NOTIFICATION::: send ::: Hello from Discord
 */
