/* Stefan Bobrowski */
angular.module('ItemShop', [])
    .controller('ItemCtrl', ['$scope', function($scope) {

        $scope.inventory = [
            {title: 'Backpack', price: '50', quantity: '10'},
            {title: 'Flashlight', price: '10', quantity: '20'}
        ];

        $scope.cart = [
            {title: 'Tent', price: '200', quantity: '1'}
        ];

        $scope.alert = "success";

        /* Display custom error or success message */
        function displayAlert(status, message) {
            $scope.alert = message;
            $('.alert').addClass('show-alert ' + status);
            setTimeout(function() {
                $('.alert').removeClass('show-alert ' + status);
            }, 3000);
        }

        /*-- Add item form --*/
        $scope.addToInventory = function() {
            var itemExistsInventory;
            var priceDiffer = true;

            /* Check for duplicate item in inventory list */
            angular.forEach($scope.inventory, function (eachItem) {
                if($scope.title.toLowerCase() == eachItem.title.toLowerCase()) {
                    itemExistsInventory = true;
                    if($scope.price == eachItem.price) {
                        priceDiffer = false;
                        eachItem.quantity = parseInt(eachItem.quantity) + parseInt($scope.quantity);
                        displayAlert('success', $scope.quantity + " " + $scope.title + " added to Inventory");
                    }
                }
            });

            /* Error - duplicate item in inventory */
            if(itemExistsInventory && priceDiffer == true) {
                displayAlert('error', $scope.title + " must be same price as in inventory");
                return;
            }
            /* If there is no duplicate item, add a new item to inventory list */
            if(!itemExistsInventory) {
                $scope.inventory.push({title: $scope.title, price: $scope.price, quantity: $scope.quantity});
                displayAlert('success', $scope.quantity + " " + $scope.title + " added to Inventory");
            }
            /* Reset input fields */
            $scope.title = '';
            $scope.price = '';
            $scope.quantity = '';
        };

        /*-- Inventory List --*/
        /* Add to Cart */
        $scope.addToCart = function(item, addToCartValue) {
            var itemExistsCart;

            /* Error - number validation */
            if(!addToCartValue) {
                displayAlert('error', "Enter a valid number of " + item.title + " to add to cart");
                return;
            }
            /* Check for duplicate item in Cart */
            angular.forEach($scope.cart, function(eachItem) {
                if(item.title.toLowerCase() == eachItem.title.toLowerCase()) {
                    itemExistsCart = true;
                    /* update quantity of item in both lists */
                    item.quantity -= addToCartValue;
                    eachItem.quantity = parseInt(eachItem.quantity) + addToCartValue;
                    /* If all items are sent to cart, remove from inventory */
                    if(item.quantity <= 0) {
                        $scope.inventory.splice($scope.inventory.indexOf(item), 1);
                    }
                    /* Success - Add new item quantity to item in Cart */
                    displayAlert('success', addToCartValue + " " + item.title + " added to cart");
                }
            });

            /* If there is no duplicate item in Cart, add to Cart */
            if(!itemExistsCart) {
                /* update quantity in inventory list */
                item.quantity -= addToCartValue;
                if(item.quantity <= 0) {
                    $scope.inventory.splice($scope.inventory.indexOf(item), 1);
                }
                /* add item to Shopping Cart */
                $scope.cart.push({title: item.title, price: item.price, quantity: addToCartValue});
                if(! $('.shopping-cart').hasClass('visible')) {
                    $('.shopping-cart').toggleClass('visible');
                }
                /* Success - Add new item to Cart */
                displayAlert('success', addToCartValue + " " + item.title + " added to cart");
            }
        };

        /* Remove from Inventory */
        $scope.removeFromInventory = function(item, removeFromInventoryValue) {
            /* Error - number validation */
            if(!removeFromInventoryValue || removeFromInventoryValue > item.quantity) {
                displayAlert('error', "Enter a valid number of " + item.title + " to remove from inventory");
                return;
            }
            /* update quantity */
            item.quantity -= removeFromInventoryValue;
            if(item.quantity <= 0) {
                $scope.inventory.splice($scope.inventory.indexOf(item), 1);
            }

            /* Success - Remove item from inventory */
            displayAlert('success', removeFromInventoryValue + " " + item.title + " removed from inventory");
        };

        /*-- Shopping Cart --*/

        /* Remove from Cart */
        $scope.removeFromCart = function(item, removeFromCartValue) {
            var itemExistsInventory;
            /* Error - number validation */
            if(!removeFromCartValue || removeFromCartValue > item.quantity) {
                displayAlert('error', "Enter a valid number of " + item.title + " to remove from cart");
                return;
            }
            /* Check for duplicate item in Inventory List... */
            angular.forEach($scope.inventory, function(eachItem) {
                if(item.title.toLowerCase() == eachItem.title.toLowerCase()) {
                    itemExistsInventory = true;

                    /* update quantity */
                    item.quantity -= removeFromCartValue;
                    if(item.quantity <= 0) {
                        $scope.cart.splice($scope.cart.indexOf(item), 1);
                    }
                    eachItem.quantity = parseInt(eachItem.quantity) + removeFromCartValue;
                    /* Success - remove item from Cart */
                    displayAlert('success', removeFromCartValue + " " + item.title + " removed from Cart");
                }
            });

            /* If there is no duplicate item in Inventory... */
            if(!itemExistsInventory) {
                /* update quantity */
                item.quantity -= removeFromCartValue;
                if(item.quantity <= 0) {
                    $scope.cart.splice($scope.cart.indexOf(item), 1);
                }
                /* add item to Inventory */
                $scope.inventory.push({title: item.title, price: item.price, quantity: removeFromCartValue});
                /* Success - Remove item from cart and put in Inventory */
                displayAlert('success', removeFromCartValue + " " + item.title + " removed from Cart")
            }
        };
    }]);
