// Attributes
//   Title: Mythos
//   Author: Stephen Fry

// Behavior:
//   Get Description

// -----------------------------
// Attributes
//   Title: Me Talk Pretty One Day
//   Author: David Sedaris

// Behavior:
//   Get Description

// -----------------------------
// Attributes
//  Title: Aunts aren't Gentlemen
//  Author: PG Wodehouse

//  Behavior:
//    Get Description

let book = {
  title: 'title',
  author: 'author',

  getDescription() {
    return `${this.title} was written by ${this.author}`;
  },
};

function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      return `${this.title} was written by ${this.author}. I ${
        this.read ? 'have' : "haven't"
      }.`;
    },

    readBook() {
      this.read = true;
    },
  };
}
