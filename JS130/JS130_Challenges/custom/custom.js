/* eslint-disable max-len */
// Create a custom set type.

// Sometimes it is necessary to define a custom data structure of some type, like a set. In this exercise you will define your own set. How it works internally doesn't matter, as long as it behaves like a set of unique elements.

class CustomSet {
  constructor(content) {
    this.contents = content;
  }
  empty() {
    return !this.contents;
  }
  contains(element) {
    if (!this.contents) return false;
    return this.contents.includes(element);
  }
  subset(newSet) {
    // stuff
    if (!this.contents) {
      return true;
    } else if (this.contents && !newSet.contents) {
      return false;
    } else {
      return this.contents.every((val) => newSet.contents.includes(val));
    }
  }
  disjoint(newSet) {
    // stuff sets are disjoint if they share no elements
    if (!this.contents && newSet.contents) {
      return true;
    } else if (this.contents.length > 0 && newSet.contents.length === 0) {
      return true;
    } else {
      return !this.contents.some((val) => newSet.contents.includes(val));
    }
  }
  eql(newSet) {
    // stuff
    if (!this.contents && !newSet.contents) return true;
    if (!this.contents && newSet.contents) return false;
    if (this.contents && !newSet.contents) return false;
    return this.contents.every((val) => newSet.contents.includes(val));
  }
  add(element) {
    // stuff
    if (this.contents) {
      this.contents.push(element);
      return this;
    } else {
      this.contents = [element];
      return this;
    }
  }
  intersection(newSet) {
    // stuff
    if (!this.contents && !newSet.contents) return this;
    if (!this.contents && newSet.contents) {
      this.contents = [];
      return this;
    } else if (this.contents && newSet.contents.length === 0) {
      return newSet;
    } else if (!this.contents.some((val) => newSet.contents.includes(val))) {
      return new CustomSet([]);
    } else {
      let sameElements = this.contents.filter((elem) => newSet.contains(elem));
      return new CustomSet(sameElements);
    }
  }
  difference(newSet) {
    // stuff
    if (!this.contents && !newSet.contents) {
      return this;
    } else if (!this.contents && newSet.contents) {
      return this;
    } else if (this.contents && !newSet.contents) {
      return this;
    } else {
      let diffElements = this.contents.filter((elem) => {
        return !newSet.contents.includes(elem);
      });
      return new CustomSet(diffElements);
    }
  }
  union(newSet) {
    // stuff
    if (!this.contents && !newSet.contents) {
      return this;
    } else if (!this.contents && newSet.contents) {
      return newSet;
    } else if (this.contents && !newSet.contents) {
      return this;
    } else {
      let unionSet = new CustomSet(this.contents);
      newSet.contents.forEach((elem) => unionSet.add(elem));
      return unionSet;
    }
  }
}
module.exports = CustomSet;
