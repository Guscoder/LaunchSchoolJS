let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function () {
    return [1, 2, 3].map((number) => {
      return this.name + ' ' + number;
    });
  },
};

// or

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function () {
    let self = this;
    return [1, 2, 3].map((number) => {
      return self.name + ' ' + number;
    });
  },
};

// or

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function () {
    return [1, 2, 3].map(
      function (number) {
        return `${this.name} ${number}`;
      }.bind(this)
    );
  },
};
