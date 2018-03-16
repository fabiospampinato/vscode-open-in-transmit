# Open in Transmit

<p align="center">
	<img src="https://raw.githubusercontent.com/fabiospampinato/vscode-open-in-transmit/master/resources/logo-128x128.png" alt="Logo">
</p>

Adds a few commands for opening the current file or project in [Transmit](https://panic.com/transmit).

Since Transmit doesn't provide a command line utility for interacting with it, this is implemented via an AppleScript.

If you want to open something in Transmit's right panel be sure the "Local Browser" is active, instead of the "Remote Browser". If you activate the `openInTransmit.switchToLocalBrowser` setting this extension can do it for you, but this requires granting Visual Studio Code accessibility permissions (System Preferences -> Security & Privacy -> Privacy -> Accessibility).

## Install

Follow the instructions in the [Marketplace](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-open-in-transmit), or run the following in the command palette:

```shell
ext install fabiospampinato.vscode-open-in-transmit
```

## Usage

It adds 4 commands to the command palette:

```js
'Open in Transmit (Left)' // Open the current file or project in Transmit's left panel
'Open in Transmit (Right)' // Open the current file or project in Transmit's right panel
'Open Root in Transmit (Left)' // Open the current project in Transmit's left panel
'Open Root in Transmit (Right)' // Open the current project in Transmit's right panel
```

## Settings

```js
{
  "openInTransmit.switchToLocalBrowser": false // Automatically switch to the local browser
}
```

## License

MIT © Fabio Spampinato
