# Live server issues

## Line endings

When running 'live-server' on unix based machine, you might get an error similar to this

```markdown
```bash
env: node\r: No such file or directory
```

This error message is typically due to a line ending issue where the script file
uses Windows-style line endings (\r\n)
instead of Unix-style (\n).

You can fix this issue by converting the line endings of the live-server script to Unix-style.
Here's a command I used in the terminal for MacOS to do this:

```markdown
```bash
dos2unix ./node_modules/live-server/live-server.js
```

Note: You need to install `dos2unix` package using brew for MacOS.
