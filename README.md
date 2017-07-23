# VSC Open in Transmit

<p align="center">
	<img src="https://raw.githubusercontent.com/fabiospampinato/vscode-open-in-transmit/master/resources/logo-128x128.png" alt="Logo">
</p>

Adds a command for opening the current file or project in [Transmit](https://panic.com/transmit).

Since Transmit doesn't provide a command line utility for interacting with it, this is implemented via an AppleScript. If you want to open something in Transmit's right panel be sure the "Local Browser" is active, instead of the "Remote Browser".

## Install

Run the following in the command palette:

```shell
ext install vscode-open-in-transmit
```

## Usage

It adds 2 commands to the command palette:

```js
'Open in Transmit (Left)' // Open the current file or project in Transmit's left panel
'Open in Transmit (Right)' // Open the current file or project in Transmit's right panel
```

## License

MIT © Fabio Spampinato
