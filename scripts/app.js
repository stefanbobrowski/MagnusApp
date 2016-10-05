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

        /**
         * @param status
         *
         * Displays a success or error alert with given message
         */
        function displayAlert(status, message) {
            $scope.alert = message;
            $('.alert').addClass('show-alert ' + status);
            setTimeout(function() {
                $('.alert').removeClass('show-alert ' + status);
            }, 3000);
        }

        /*-- Add Item --*/
        $scope.addToInventory = function() {
            var itemExistsInventory;
            var priceDiffer = true;

            angular.forEach($scope.inventory, function (eachItem) {
                /* If there is a duplicate item in Inventory... */
                if($scope.title.toLowerCase() == eachItem.title.toLowerCase()) {
                    itemExistsInventory = true;
                    if($scope.price == eachItem.price) {
                        priceDiffer = false;
                        eachItem.quantity = parseInt(eachItem.quantity) + parseInt($scope.quantity);
                        displayAlert('success', $scope.quantity + " " + $scope.title + " added to Inventory");
                    }
                }
            });

            /* error handling */
            if(itemExistsInventory && priceDiffer == true) {
                displayAlert('error', $scope.title + " must be same price as in inventory");
                return;
            }
            /* If item doesn't exist, add as new item */
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

            /* error handling */
            if(!addToCartValue) {
                displayAlert('error', "Enter a valid number of " + item.title + " to add to cart");
                return;
            }
            angular.forEach($scope.cart, function(eachItem) {
                /* If there is a duplicate item in Shopping Cart... */
                if(item.title.toLowerCase() == eachItem.title.toLowerCase()) {
                    itemExistsCart = true;
                    /* update quantity of item in both lists */
                    item.quantity -= addToCartValue;
                    eachItem.quantity = parseInt(eachItem.quantity) + addToCartValue;
                    /* If all items are sent to cart, remove from inventory */
                    if(item.quantity <= 0) {
                        $scope.inventory.splice($scope.inventory.indexOf(item), 1);
                    }
                    displayAlert('success', addToCartValue + " " + item.title + " added to cart");
                }
            });

            /* If there is no duplicate item in Shopping Cart... */
            if(!itemExistsCart) {
                /* update quantity */
                item.quantity -= addToCartValue;
                if(item.quantity <= 0) {
                    $scope.inventory.splice($scope.inventory.indexOf(item), 1);
                }
                /* add item to Shopping Cart */
                $scope.cart.push({title: item.title, price: item.price, quantity: addToCartValue});
                if(! $('.shopping-cart').hasClass('visible')) {
                    $('.shopping-cart').toggleClass('visible');
                }
                displayAlert('success', addToCartValue + " " + item.title + " added to cart");
            }
        };

        /* Remove from Inventory */
        $scope.removeFromInventory = function(item, removeFromInventoryValue) {
            /* error handling */
            if(!removeFromInventoryValue || removeFromInventoryValue > item.quantity) {
                displayAlert('error', "Enter a valid number of " + item.title + " to remove from inventory");
                return;
            }
            /* update quantity */
            item.quantity -= removeFromInventoryValue;
            if(item.quantity <= 0) {
                $scope.inventory.splice($scope.inventory.indexOf(item), 1);
            }
            displayAlert('success', removeFromInventoryValue + " " + item.title + " removed from inventory");
        };

        /*-- Shopping Cart --*/

        /* Remove from Cart */
        $scope.removeFromCart = function(item, removeFromCartValue) {
            var itemExistsInventory;
            /* error handling */
            if(!removeFromCartValue || removeFromCartValue > item.quantity) {
                displayAlert('error', "Enter a valid number of " + item.title + " to remove from cart");
                return;
            }
            angular.forEach($scope.inventory, function(eachItem) {
                /* If there is a duplicate item in Inventory List... */
                if(item.title.toLowerCase() == eachItem.title.toLowerCase()) {
                    itemExistsInventory = true;

                    /* update quantity */
                    item.quantity -= removeFromCartValue;
                    if(item.quantity <= 0) {
                        $scope.cart.splice($scope.cart.indexOf(item), 1);
                    }
                    eachItem.quantity = parseInt(eachItem.quantity) + removeFromCartValue;
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
                displayAlert('success', removeFromCartValue + " " + item.title + " removed from Cart")
            }
        };
    }]);
