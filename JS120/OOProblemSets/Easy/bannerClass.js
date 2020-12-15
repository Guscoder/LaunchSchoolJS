class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log(
      [
        this.horizontalRule(),
        this.emptyLine(),
        this.messageLine(),
        this.emptyLine(),
        this.horizontalRule(),
      ].join('\n')
    );
  }

  horizontalRule() {
    let dashes = '-'.repeat(this.message.length + 2);
    return `+${dashes}+`;
  }

  emptyLine() {
    return `|${' '.repeat(this.message.length + 2)}|`;
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
