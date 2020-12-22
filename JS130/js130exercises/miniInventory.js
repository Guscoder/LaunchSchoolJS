let ItemCreator = (function () {
  function verifyItemName(name) {
    //name must be min of 5 chars not counting spaces
  }
  function verifyCategory(category) {
    // category must be min 5 chars and one word
  }
  function verifyQuantity(quantity) {
    // must not be blank
  }
  function generateSku(itemName, category) {
    // first 3 letters of name + first 2 letters of category
  }
  return function (itemName, category, quantity) {
    if (
      verifyItemName(itemName) &&
      verifyCategory(category) &&
      verifyQuantity(quantity)
    ) {
      this.skuCode = generateSku(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

const ItemManager = {
  itemList: [],
  create(itemName, category, quantity) {
    let newItem = new ItemCreator(itemName, category, quantity);
    if (itemName.notValid) {
      return false;
    } else {
      this.itemList.push(newItem);
    }
    return newItem;
  },
  items() {
    return this.itemList;
  },
  getItem(skuCode) {
    return this.itemList.filter((item) => {
      return skuCode === item.skuCode;
    })[0];
  },
  update(skuCode, updatedObject) {
    Object.assign(this.getItem(skuCode), updatedObject);
  },
  inStock() {
    return this.itemList.filter((item) => {
      return item.quantity > 0;
    });
  },
  itemsInCategory(category) {
    return this.itemList.filter((item) => {
      return item.category === category;
    });
  },
  delete(skuCode) {
    this.itemList.splice(this.items.indexOf(this.getItem(skuCode)), 1);
  },
};

// const kitchenPotReporter = ReportManager.createReporter("KITCO");
// kitchenPotReporter.itemInfo();

const ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },
  createReporter(skuCode) {
    return function () {
      let item = this.items.getItem(skuCode);
      return {
        itemInfo: function () {
          Object.keys(item).forEach(function (key) {
            console.log(key + ": " + item[key]);
          });
        },
      };
    }.bind(this)();
  },
  reportInStock() {
    console.log(
      this.items
        .inStock()
        .map(function (item) {
          return item.itemName;
        })
        .join(",")
    );
  },
};

ItemManager.create("basket ball", "sports", 0); // valid item
ItemManager.create("asd", "sports", 0);
ItemManager.create("soccer ball", "sports", 5); // valid item
ItemManager.create("football", "sports");
ItemManager.create("football", "sports", 3); // valid item
ItemManager.create("kitchen pot", "cooking items", 0);
ItemManager.create("kitchen pot", "cooking", 3); // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update("SOCSP", { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory("sports");
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete("SOCSP");
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter("KITCO");
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update("KITCO", { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
