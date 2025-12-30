// Enhanced Ethiopian Products Data - COMPLETE ARRAY
        const ethiopianProducts = [
            {
                id: 1,
                name: "Habesha Kemis - Gonder Style",
                price: 2800,
                originalPrice: 3200,
                category: "traditional",
                tags: ["traditional", "habesha", "kemis", "gonder", "new"],
                trending: true,
                images: [
                    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                description: "Traditional Ethiopian dress with intricate Gonder embroidery patterns. Made from premium cotton fabric with hand-stitched designs.",
                rating: 4.9,
                reviews: 128,
                sizes: ["S", "M", "L", "XL"],
                colors: [
                    { name: "White", hex: "#FFFFFF" },
                    { name: "Ivory", hex: "#FFFFF0" },
                    { name: "Cream", hex: "#FFFDD0" }
                ],
                material: "Premium Cotton",
                stock: 25,
                badge: "Best Seller",
                inStock: true,
                features: ["Hand-embroidered", "Machine washable", "Breathable fabric"],
                deliveryTime: "1-2 days"
            },
            {
                id: 2,
                name: "Men's Ethiopian Suit",
                price: 3500,
                originalPrice: 4200,
                category: "men",
                tags: ["men", "formal", "suit", "new", "trending"],
                trending: true,
                images: [
                    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                description: "Elegant Ethiopian men's suit perfect for formal occasions. Made from premium wool blend fabric.",
                rating: 4.7,
                reviews: 89,
                sizes: ["M", "L", "XL", "XXL"],
                colors: [
                    { name: "Black", hex: "#000000" },
                    { name: "Navy", hex: "#000080" },
                    { name: "Charcoal", hex: "#36454F" }
                ],
                material: "Wool Blend",
                stock: 18,
                badge: "New Arrival",
                inStock: true,
                features: ["Tailored fit", "Dry clean only", "Wrinkle-resistant"],
                deliveryTime: "2-3 days"
            },
            {
                id: 3,
                name: "Women's Evening Dress",
                price: 2200,
                category: "women",
                tags: ["women", "evening", "party", "dress"],
                trending: false,
                images: [
                    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                description: "Beautiful evening dress for special occasions. Made from silk blend fabric with elegant design.",
                rating: 4.6,
                reviews: 112,
                sizes: ["S", "M", "L"],
                colors: [
                    { name: "Red", hex: "#FF0000" },
                    { name: "Black", hex: "#000000" },
                    { name: "Royal Blue", hex: "#4169E1" }
                ],
                material: "Silk Blend",
                stock: 32,
                badge: "Popular",
                inStock: true,
                features: ["Silk blend", "Hand-wash only", "Elegant design"],
                deliveryTime: "1-2 days"
            },
            {
                id: 4,
                name: "Kids Traditional Outfit",
                price: 1200,
                originalPrice: 1500,
                category: "kids",
                tags: ["kids", "traditional", "children"],
                trending: true,
                images: [
                    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                description: "Traditional Ethiopian outfit for children, perfect for cultural events and celebrations.",
                rating: 4.8,
                reviews: 45,
                sizes: ["2-4Y", "5-7Y", "8-10Y"],
                colors: [
                    { name: "White", hex: "#FFFFFF" },
                    { name: "Blue", hex: "#0000FF" },
                    { name: "Green", hex: "#008000" }
                ],
                material: "Cotton",
                stock: 40,
                badge: "Sale",
                inStock: true,
                features: ["Comfortable cotton", "Machine washable", "Colorfast"],
                deliveryTime: "2-3 days"
            },
            {
                id: 5,
                name: "Fitness Training Set",
                price: 1500,
                originalPrice: 2000,
                category: "fitness",
                tags: ["fitness", "training", "workout", "gym"],
                trending: true,
                images: [
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                description: "Complete fitness training set for workouts. Made from breathable, moisture-wicking fabric.",
                rating: 4.5,
                reviews: 89,
                sizes: ["S", "M", "L", "XL"],
                colors: [
                    { name: "Black", hex: "#000000" },
                    { name: "Grey", hex: "#808080" },
                    { name: "Navy Blue", hex: "#000080" }
                ],
                material: "Polyester Blend",
                stock: 55,
                badge: "Sale",
                inStock: true,
                features: ["Moisture-wicking", "Breathable", "Quick-dry"],
                deliveryTime: "1-2 days"
            },
            {
                id: 6,
                name: "Amhara Cultural Dress",
                price: 3200,
                category: "traditional",
                tags: ["amhara", "cultural", "traditional"],
                trending: false,
                images: [
                    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                description: "Beautiful Amhara region cultural dress with intricate embroidery patterns.",
                rating: 4.7,
                reviews: 92,
                sizes: ["S", "M", "L", "XL"],
                colors: [
                    { name: "White", hex: "#FFFFFF" },
                    { name: "Blue", hex: "#0000FF" },
                    { name: "Green", hex: "#008000" }
                ],
                material: "Cotton",
                stock: 22,
                badge: "Cultural",
                inStock: true,
                features: ["Hand-embroidered", "Traditional design", "Comfortable fit"],
                deliveryTime: "2-3 days"
            }
        ];

        // Add more products programmatically
        for (let i = 7; i <= 30; i++) {
            const categories = ['traditional', 'men', 'women', 'kids', 'fitness'];
            const category = categories[Math.floor(Math.random() * categories.length)];

            const hasSale = Math.random() > 0.6;
            const originalPrice = hasSale ? Math.floor(Math.random() * 2000) + 1500 : null;
            const price = originalPrice ? Math.floor(originalPrice * 0.8) : Math.floor(Math.random() * 2000) + 1000;

            let name, description, rating, tags, trending, badge;

            switch (category) {
                case 'traditional':
                    name = `Ethiopian Traditional Dress ${i}`;
                    description = "Authentic Ethiopian traditional clothing with beautiful hand-embroidered patterns.";
                    rating = (Math.random() * 0.5) + 4.0;
                    tags = ["traditional", "habesha", "handmade"];
                    trending = Math.random() > 0.5;
                    badge = hasSale ? "Sale" : (i % 3 === 0 ? "New" : null);
                    break;
                case 'men':
                    name = `Men's Fashion ${i}`;
                    description = "Modern men's fashion clothing with premium quality and stylish design.";
                    rating = (Math.random() * 0.5) + 4.0;
                    tags = ["men", "fashion", "modern"];
                    trending = Math.random() > 0.5;
                    badge = hasSale ? "Sale" : (i % 4 === 0 ? "Trending" : null);
                    break;
                case 'women':
                    name = `Women's Fashion ${i}`;
                    description = "Elegant women's fashion clothing for every occasion, made from premium fabrics.";
                    rating = (Math.random() * 0.5) + 4.0;
                    tags = ["women", "fashion", "elegant"];
                    trending = Math.random() > 0.5;
                    badge = hasSale ? "Sale" : (i % 5 === 0 ? "Popular" : null);
                    break;
                case 'kids':
                    name = `Kids' Clothing ${i}`;
                    description = "Comfortable and stylish kids clothing made from soft, child-friendly fabrics.";
                    rating = (Math.random() * 0.5) + 4.0;
                    tags = ["kids", "children", "comfortable"];
                    trending = Math.random() > 0.5;
                    badge = hasSale ? "Sale" : null;
                    break;
                case 'fitness':
                    name = `Fitness Apparel ${i}`;
                    description = "High-quality fitness clothing for active lifestyle, made from breathable fabric.";
                    rating = (Math.random() * 0.5) + 4.0;
                    tags = ["fitness", "workout", "gym"];
                    trending = Math.random() > 0.5;
                    badge = hasSale ? "Sale" : null;
                    break;
            }

            ethiopianProducts.push({
                id: i,
                name: name,
                price: price,
                originalPrice: originalPrice,
                category: category,
                tags: tags,
                trending: trending,
                images: [
                    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                description: description,
                rating: parseFloat(rating.toFixed(1)),
                reviews: Math.floor(Math.random() * 200),
                sizes: ["S", "M", "L"],
                colors: [
                    { name: "White", hex: "#FFFFFF" },
                    { name: "Black", hex: "#000000" },
                    { name: "Blue", hex: "#0000FF" }
                ],
                material: "Cotton",
                stock: Math.floor(Math.random() * 50) + 10,
                badge: badge,
                inStock: true,
                features: ["Quality fabric", "Comfortable fit", "Durable"],
                deliveryTime: Math.random() > 0.5 ? "1-2 days" : "2-3 days"
            });
        }

        // Core Variables
        let cart = [];
        let wishlist = [];
        let comparisonProducts = [];
        let recentlyViewed = [];
        let userPoints = 1250;
        let displayedProducts = 12;
        let currentFilter = 'all';
        let currentPaymentMethod = null;

        // Initialize
        document.addEventListener('DOMContentLoaded', function () {
            initializeApp();
        });

        function initializeApp() {
            loadFromStorage();
            renderProducts();
            setupEventListeners();
            startCountdown();
            showNewsletterPopup();
            updateHeaderOnScroll();
        }

        // Update header on scroll
        function updateHeaderOnScroll() {
            const header = document.querySelector('header');
            window.addEventListener('scroll', function () {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }

        // Setup Event Listeners
        function setupEventListeners() {
            // Cart Icon Click - Open Cart Modal
            document.getElementById('cart-icon').addEventListener('click', openCartModal);
            document.getElementById('close-cart').addEventListener('click', closeCartModal);

            // Cart Actions
            document.getElementById('view-cart-details').addEventListener('click', viewCartDetails);
            document.getElementById('checkout-btn').addEventListener('click', proceedToCheckout);

            // Search
            document.getElementById('search-icon').addEventListener('click', openSearchModal);
            document.getElementById('search-btn').addEventListener('click', openSearchModal);
            document.getElementById('modal-search-input').addEventListener('input', handleSearch);
            document.getElementById('modal-search-btn').addEventListener('click', () => {
                handleSearch({ target: document.getElementById('modal-search-input') });
            });

            // Navigation
            document.querySelector('.mobile-menu').addEventListener('click', toggleMobileMenu);
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', handleSmoothScroll);
            });

            // Products
            document.getElementById('load-more').addEventListener('click', loadMoreProducts);
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', handleFilter);
            });

            // Shipping Calculator
            document.getElementById('calculate-shipping').addEventListener('click', calculateShipping);

            // Newsletter
            document.getElementById('newsletter-form').addEventListener('submit', handleNewsletter);
            document.getElementById('popup-newsletter-form').addEventListener('submit', handlePopupNewsletter);
            document.getElementById('popup-close').addEventListener('click', closeNewsletterPopup);

            // FABs
            document.getElementById('whatsapp-fab').addEventListener('click', openWhatsApp);
            document.getElementById('quick-shop-fab').addEventListener('click', quickShop);

            // Product Modal
            document.getElementById('close-product-modal').addEventListener('click', closeProductModal);

            // Payment Modal
            document.getElementById('close-payment-modal').addEventListener('click', closePaymentModal);
            document.getElementById('next-to-payment').addEventListener('click', goToPaymentStep);
            document.getElementById('back-to-delivery').addEventListener('click', goToDeliveryStep);
            document.getElementById('confirm-payment').addEventListener('click', processPayment);

            // Payment Method Selection
            document.querySelectorAll('.payment-method').forEach(method => {
                method.addEventListener('click', selectPaymentMethod);
            });

            // Order Confirmation
            document.getElementById('track-order-btn').addEventListener('click', trackOrder);
            document.getElementById('continue-shopping-btn').addEventListener('click', continueShopping);

            // Clear comparison
            document.getElementById('clear-comparison').addEventListener('click', clearComparison);

            // Close modals on Escape
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    closeAllModals();
                }
            });

            // Close modals on outside click
            document.addEventListener('click', function (e) {
                if (e.target.classList.contains('product-modal')) {
                    closeProductModal();
                }
                if (e.target.classList.contains('search-modal')) {
                    closeSearchModal();
                }
                if (e.target.classList.contains('cart-modal')) {
                    closeCartModal();
                }
                if (e.target.classList.contains('payment-modal')) {
                    closePaymentModal();
                }
                if (e.target.classList.contains('confirmation-modal')) {
                    closeConfirmationModal();
                }
            });

            // Track order link
            document.getElementById('track-order-link').addEventListener('click', function (e) {
                e.preventDefault();
                showToast('Order tracking feature coming soon!', 'info');
            });

            // Size guide
            document.getElementById('view-size-guide').addEventListener('click', function () {
                showToast('Size guide opened in new window', 'info');
            });

            document.getElementById('size-guide-link').addEventListener('click', function (e) {
                e.preventDefault();
                showToast('Size guide opened in new window', 'info');
            });

            // Navigation dropdown filter links
            document.querySelectorAll('.dropdown a[data-filter]').forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const filter = this.getAttribute('data-filter');
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                    document.querySelector(`.filter-btn[data-filter="${filter}"]`)?.classList.add('active');
                    currentFilter = filter;
                    displayedProducts = 12;
                    renderProducts();

                    // Scroll to products
                    document.getElementById('products').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
            });

            // Quick view buttons
            document.addEventListener('click', function (e) {
                if (e.target.classList.contains('quick-view-btn') || e.target.closest('.quick-view-btn')) {
                    const btn = e.target.classList.contains('quick-view-btn') ? e.target : e.target.closest('.quick-view-btn');
                    const productId = parseInt(btn.dataset.id);
                    if (productId) {
                        openProductModal(productId);
                    }
                }
            });
        }

        // Shopping Cart Modal Functions
        function openCartModal() {
            const cartModal = document.getElementById('cart-modal');
            cartModal.classList.add('active');
            updateCartModal();
            document.body.style.overflow = 'hidden';
        }

        function closeCartModal() {
            const cartModal = document.getElementById('cart-modal');
            cartModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function updateCartModal() {
            const cartContent = document.getElementById('cart-modal-content');
            const totalAmountElement = document.getElementById('cart-total-amount');

            if (cart.length === 0) {
                cartContent.innerHTML = `
                    <div class="cart-empty">
                        <i class="fas fa-shopping-bag"></i>
                        <h3>Your cart is empty</h3>
                        <p>Add some products to your cart</p>
                        <button class="btn" onclick="closeCartModal()" style="margin-top: 20px;">Continue Shopping</button>
                    </div>
                `;
                totalAmountElement.textContent = '0 ETB';
                return;
            }

            // Calculate total
            let total = 0;
            cart.forEach(item => {
                total += item.price * item.quantity;
            });

            // Render cart items
            cartContent.innerHTML = `
                <div class="cart-items">
                    ${cart.map(item => `
                        <div class="cart-item" data-id="${item.id}">
                            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                            <div class="cart-item-info">
                                <div class="cart-item-name">${item.name}</div>
                                <div class="cart-item-price">${item.price} ETB</div>
                                <div class="cart-item-quantity">
                                    <button class="cart-quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
                                    <span class="cart-quantity">${item.quantity}</span>
                                    <button class="cart-quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
                                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                                <div style="margin-top: 5px; color: #666;">
                                    Subtotal: <strong>${item.price * item.quantity} ETB</strong>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                ${cart.length > 2 ? `
                    <div style="text-align: center; margin: 20px 0;">
                        <button class="btn" onclick="clearCart()">Clear Cart</button>
                    </div>
                ` : ''}
            `;

            totalAmountElement.textContent = `${total} ETB`;
        }

        // Cart Functions
        function addToCart(productId) {
            const product = ethiopianProducts.find(p => p.id === productId);
            if (!product) return;

            const existing = cart.find(item => item.id === productId);
            if (existing) {
                existing.quantity++;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.images[0]
                });
            }

            // Add points (1 point per 10 ETB)
            const pointsEarned = Math.floor(product.price / 10);
            addPoints(pointsEarned);

            updateCartDisplay();
            updateCartModal();
            saveToStorage();
            showToast(`${product.name} added to cart`, 'success');
        }

        function increaseQuantity(productId) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity++;
                updateCartDisplay();
                updateCartModal();
                saveToStorage();
            }
        }

        function decreaseQuantity(productId) {
            const itemIndex = cart.findIndex(item => item.id === productId);
            if (itemIndex !== -1) {
                if (cart[itemIndex].quantity > 1) {
                    cart[itemIndex].quantity--;
                } else {
                    cart.splice(itemIndex, 1);
                }
                updateCartDisplay();
                updateCartModal();
                saveToStorage();
            }
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartDisplay();
            updateCartModal();
            saveToStorage();
            showToast('Item removed from cart', 'warning');
        }

        function clearCart() {
            if (confirm('Are you sure you want to clear your cart?')) {
                cart = [];
                updateCartDisplay();
                updateCartModal();
                saveToStorage();
                showToast('Cart cleared', 'info');
            }
        }

        function updateCartDisplay() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const cartCountElement = document.querySelector('.cart-count');
            if (cartCountElement) {
                cartCountElement.textContent = totalItems;
            }
        }

        // Cart Actions
        function viewCartDetails() {
            closeCartModal();
            showToast('Opening detailed cart view...', 'info');
        }

        function proceedToCheckout() {
            if (cart.length === 0) {
                showToast('Your cart is empty', 'warning');
                return;
            }
            closeCartModal();
            openPaymentModal();
        }

        // Payment Modal Functions
        function openPaymentModal() {
            // Update order summary
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const tax = subtotal * 0.15;
            const total = subtotal + tax;

            document.getElementById('order-subtotal').textContent = `${subtotal.toLocaleString()} ETB`;
            document.getElementById('order-tax').textContent = `${tax.toLocaleString()} ETB`;
            document.getElementById('order-total').textContent = `${total.toLocaleString()} ETB`;
            document.getElementById('payment-total').textContent = `${total.toLocaleString()} ETB`;

            document.getElementById('payment-modal').classList.add('active');
            document.body.style.overflow = 'hidden';

            // Reset to step 1
            resetPaymentSteps();
        }

        function closePaymentModal() {
            document.getElementById('payment-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function resetPaymentSteps() {
            // Reset all steps
            document.querySelectorAll('.payment-step').forEach((step, index) => {
                step.classList.remove('active', 'completed');
                if (index === 0) step.classList.add('active');
            });

            // Show delivery form, hide others
            document.querySelectorAll('.payment-form').forEach(form => form.classList.remove('active'));
            document.getElementById('delivery-form').classList.add('active');

            // Hide all payment details
            document.querySelectorAll('.payment-details').forEach(detail => detail.style.display = 'none');

            // Reset payment method
            currentPaymentMethod = null;
            document.querySelectorAll('.payment-method').forEach(method => method.classList.remove('selected'));
            document.getElementById('selected-method').textContent = 'Not selected';
        }

        function selectPaymentMethod(e) {
            const method = e.currentTarget.closest('.payment-method');
            const methodType = method.dataset.method;

            // Remove selected from all methods
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));

            // Add selected to clicked method
            method.classList.add('selected');
            currentPaymentMethod = methodType;

            // Update selected method display
            const methodName = method.querySelector('h4').textContent;
            document.getElementById('selected-method').textContent = methodName;

            // Show relevant payment details
            document.querySelectorAll('.payment-details').forEach(detail => detail.style.display = 'none');

            if (methodType === 'cbe') {
                document.getElementById('cbe-details').style.display = 'block';
            } else if (methodType === 'telebirr') {
                document.getElementById('telebirr-details').style.display = 'block';
            } else if (methodType === 'cash') {
                document.getElementById('cash-details').style.display = 'block';
            } else {
                document.getElementById('other-details').style.display = 'block';
                document.getElementById('other-title').textContent = `${methodName} Payment`;
                document.getElementById('other-description').textContent =
                    `Please complete payment through ${methodName}. You can enter transaction reference below if available.`;
            }
        }

        function goToPaymentStep() {
            // Validate delivery form
            const fullName = document.getElementById('full-name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const region = document.getElementById('region').value;
            const address = document.getElementById('address').value.trim();

            if (!fullName || !phone || !region || !address) {
                showToast('Please fill all required fields', 'warning');
                return;
            }

            // Validate Ethiopian phone number
            const phoneRegex = /^\+251[0-9]{9}$/;
            if (!phoneRegex.test(phone)) {
                showToast('Please enter a valid Ethiopian phone number (+251 followed by 9 digits)', 'warning');
                return;
            }

            // Update steps
            document.getElementById('step-1').classList.remove('active');
            document.getElementById('step-1').classList.add('completed');
            document.getElementById('step-2').classList.add('active');

            // Switch forms
            document.getElementById('delivery-form').classList.remove('active');
            document.getElementById('payment-method-form').classList.add('active');
        }

        function goToDeliveryStep() {
            // Update steps
            document.getElementById('step-2').classList.remove('active');
            document.getElementById('step-1').classList.add('active');

            // Switch forms
            document.getElementById('payment-method-form').classList.remove('active');
            document.getElementById('delivery-form').classList.add('active');
        }

        function processPayment() {
            if (!currentPaymentMethod) {
                showToast('Please select a payment method', 'warning');
                return;
            }

            // Update steps
            document.getElementById('step-2').classList.remove('active');
            document.getElementById('step-2').classList.add('completed');
            document.getElementById('step-3').classList.add('active');

            // Switch to processing form
            document.getElementById('payment-method-form').classList.remove('active');
            document.getElementById('processing-form').style.display = 'block';

            // Start processing animation
            simulatePaymentProcessing();
        }

        function simulatePaymentProcessing() {
            const processingBar = document.getElementById('processing-bar');
            const processingText = document.getElementById('processing-text');

            let progress = 0;
            const steps = [
                "Initializing payment gateway...",
                "Connecting to bank server...",
                "Processing transaction...",
                "Verifying payment details...",
                "Finalizing transaction..."
            ];

            const interval = setInterval(() => {
                progress += 20;
                processingBar.style.width = `${progress}%`;

                if (progress <= 100) {
                    const stepIndex = Math.min(Math.floor(progress / 20), steps.length - 1);
                    processingText.textContent = steps[stepIndex];
                }

                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        completePayment();
                    }, 1000);
                }
            }, 500);
        }

        function completePayment() {
            // Generate order ID
            const orderId = 'ORDER#' + Math.random().toString(36).substr(2, 9).toUpperCase();

            // Get order details
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const tax = subtotal * 0.15;
            const total = subtotal + tax;
            const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            const region = document.getElementById('region').options[document.getElementById('region').selectedIndex].text;
            const paymentMethod = document.querySelector('.payment-method.selected h4').textContent;

            // Update confirmation modal
            document.getElementById('order-id-display').textContent = orderId;
            document.getElementById('order-summary-details').textContent =
                `${itemCount} items • Total: ${total.toLocaleString()} ETB`;
            document.getElementById('order-delivery-info').textContent =
                `Delivery to: ${region}, 3-5 days`;
            document.getElementById('order-payment-method').textContent =
                `Payment: ${paymentMethod}`;

            // Save order to history
            saveOrderToHistory(orderId, total, itemCount, paymentMethod);

            // Close payment modal and show confirmation
            closePaymentModal();
            openConfirmationModal();

            // Clear cart
            cart = [];
            updateCartDisplay();
            saveToStorage();
        }

        function saveOrderToHistory(orderId, total, itemCount, paymentMethod) {
            const order = {
                id: orderId,
                date: new Date().toISOString(),
                total: total,
                items: itemCount,
                paymentMethod: paymentMethod,
                status: 'Processing'
            };

            let orderHistory = JSON.parse(localStorage.getItem('fitzone_order_history') || '[]');
            orderHistory.unshift(order);

            // Keep only last 50 orders
            if (orderHistory.length > 50) {
                orderHistory = orderHistory.slice(0, 50);
            }

            localStorage.setItem('fitzone_order_history', JSON.stringify(orderHistory));
        }

        function openConfirmationModal() {
            document.getElementById('confirmation-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeConfirmationModal() {
            document.getElementById('confirmation-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function trackOrder() {
            closeConfirmationModal();
            showToast('Order tracking page will open shortly', 'info');
            // In a real app, this would navigate to order tracking page
        }

        function continueShopping() {
            closeConfirmationModal();
            showToast('Welcome back to shopping!', 'success');
        }

        // Toast Notification System
        function showToast(message, type = 'success', duration = 5000) {
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.innerHTML = `
                <i class="fas fa-${getToastIcon(type)} toast-icon"></i>
                <div class="toast-content">${message}</div>
                <button class="toast-close"><i class="fas fa-times"></i></button>
            `;

            const container = document.getElementById('toast-container');
            container.appendChild(toast);

            setTimeout(() => toast.classList.add('show'), 10);

            // Auto remove
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, duration);

            // Manual close
            toast.querySelector('.toast-close').addEventListener('click', () => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            });
        }

        function getToastIcon(type) {
            switch (type) {
                case 'success': return 'check-circle';
                case 'error': return 'exclamation-circle';
                case 'warning': return 'exclamation-triangle';
                case 'info': return 'info-circle';
                default: return 'check-circle';
            }
        }

        // Advanced Product Modal
        function openProductModal(productId) {
            const product = ethiopianProducts.find(p => p.id === productId);
            if (!product) return;

            // Track recently viewed
            addToRecentlyViewed(productId);

            const modalContent = document.getElementById('product-modal-content');
            modalContent.innerHTML = createProductModalHTML(product);

            document.getElementById('product-modal').classList.add('active');
            document.body.style.overflow = 'hidden';

            // Setup modal interactions
            setupProductModalEvents(product);
        }

        function createProductModalHTML(product) {
            const stockPercentage = (product.stock / 50) * 100;
            const stockClass = stockPercentage < 30 ? 'low' : '';

            return `
                <div class="product-modal-images">
                    <img src="${product.images[0]}" alt="${product.name}" class="product-modal-main-img" id="modal-main-img">
                    <div class="product-modal-thumbnails" id="modal-thumbnails">
                        ${product.images.map((img, index) => `
                            <img src="${img}" class="product-modal-thumbnail ${index === 0 ? 'active' : ''}" 
                                 data-index="${index}" alt="Thumbnail ${index + 1}">
                        `).join('')}
                    </div>
                </div>
                <div class="product-modal-info">
                    <div class="product-modal-header">
                        <h2 class="product-modal-title">${product.name}</h2>
                        <div>
                            <span class="product-modal-price">${product.price} ETB</span>
                            ${product.originalPrice ?
                    `<span class="product-modal-old-price">${product.originalPrice} ETB</span>` : ''}
                        </div>
                        <div class="product-rating" style="margin-top: 10px;">
                            ${getRatingStars(product.rating)} (${product.reviews} reviews)
                        </div>
                    </div>
                    
                    <p class="product-modal-description">${product.description}</p>
                    
                    <div class="product-modal-options">
                        ${product.colors ? `
                        <div class="option-group">
                            <div class="option-label">Color:</div>
                            <div class="option-values">
                                ${product.colors.map((color, index) => `
                                    <div class="option-value ${index === 0 ? 'selected' : ''}" 
                                         data-color="${color.hex}"
                                         style="background: ${color.hex}; color: ${getContrastColor(color.hex)}">
                                        ${color.name}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        ` : ''}
                        
                        ${product.sizes ? `
                        <div class="option-group">
                            <div class="option-label">Size:</div>
                            <div class="option-values">
                                ${product.sizes.map((size, index) => `
                                    <div class="option-value ${index === 0 ? 'selected' : ''}" 
                                         data-size="${size}">
                                        ${size}
                                    </div>
                                `).join('')}
                            </div>
                            <a href="#" class="size-guide-link" style="font-size: 0.9rem; color: var(--eth-green);">View size guide</a>
                        </div>
                        ` : ''}
                        
                        <div class="option-group">
                            <div class="option-label">Quantity:</div>
                            <div class="quantity-selector">
                                <button class="quantity-btn" id="decrease-qty">-</button>
                                <span class="quantity-display" id="quantity-display">1</span>
                                <button class="quantity-btn" id="increase-qty">+</button>
                                <div class="stock-display">
                                    <div class="stock-indicator">
                                        <div class="stock-fill ${stockClass}" style="width: ${stockPercentage}%"></div>
                                    </div>
                                    <span>${product.stock} items left</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="product-modal-actions">
                        <button class="btn" id="add-to-cart-modal">
                            <i class="fas fa-shopping-bag"></i> Add to Cart
                        </button>
                        <button class="btn btn-yellow" id="buy-now-modal">
                            <i class="fas fa-bolt"></i> Buy Now
                        </button>
                        <button class="action-btn ${isInWishlist(product.id) ? 'wishlisted' : ''}" id="wishlist-modal">
                            <i class="${isInWishlist(product.id) ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                        <button class="action-btn compare-btn ${isInComparison(product.id) ? 'active' : ''}" id="compare-modal">
                            <i class="fas fa-exchange-alt"></i>
                        </button>
                    </div>
                    
                    <div class="product-modal-footer">
                        <div>
                            <div class="option-label">Features:</div>
                            <ul>
                                ${product.features ? product.features.map(f => `<li>${f}</li>`).join('') : ''}
                            </ul>
                        </div>
                        
                        ${product.tags ? `
                        <div>
                            <div class="option-label">Tags:</div>
                            <div class="product-tags-list">
                                ${product.tags.map(tag => `
                                    <span class="product-modal-tag">${tag}</span>
                                `).join('')}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        function setupProductModalEvents(product) {
            // Thumbnail click
            document.querySelectorAll('.product-modal-thumbnail').forEach(thumb => {
                thumb.addEventListener('click', function () {
                    const index = this.dataset.index;
                    document.getElementById('modal-main-img').src = product.images[index];
                    document.querySelectorAll('.product-modal-thumbnail').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // Option selection
            document.querySelectorAll('.option-value').forEach(option => {
                option.addEventListener('click', function () {
                    const group = this.closest('.option-group');
                    group.querySelectorAll('.option-value').forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });

            // Quantity controls
            let quantity = 1;
            const quantityDisplay = document.getElementById('quantity-display');

            document.getElementById('increase-qty').addEventListener('click', () => {
                if (quantity < product.stock) {
                    quantity++;
                    quantityDisplay.textContent = quantity;
                }
            });

            document.getElementById('decrease-qty').addEventListener('click', () => {
                if (quantity > 1) {
                    quantity--;
                    quantityDisplay.textContent = quantity;
                }
            });

            // Action buttons
            document.getElementById('add-to-cart-modal').addEventListener('click', () => {
                addToCartFromModal(product.id, quantity);
            });

            document.getElementById('buy-now-modal').addEventListener('click', () => {
                buyNow(product.id, quantity);
            });

            document.getElementById('wishlist-modal').addEventListener('click', () => {
                toggleWishlist(product.id);
                const btn = document.getElementById('wishlist-modal');
                if (isInWishlist(product.id)) {
                    btn.classList.add('wishlisted');
                    btn.innerHTML = '<i class="fas fa-heart"></i>';
                } else {
                    btn.classList.remove('wishlisted');
                    btn.innerHTML = '<i class="far fa-heart"></i>';
                }
            });

            document.getElementById('compare-modal').addEventListener('click', () => {
                toggleComparison(product.id);
                const btn = document.getElementById('compare-modal');
                if (isInComparison(product.id)) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        // Search Functionality
        function openSearchModal() {
            document.getElementById('search-modal').classList.add('active');
            document.getElementById('modal-search-input').focus();
            document.body.style.overflow = 'hidden';
        }

        function closeSearchModal() {
            document.getElementById('search-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function handleSearch(e) {
            const query = e.target.value.toLowerCase().trim();
            const resultsContainer = document.getElementById('search-results');

            if (query.length < 2) {
                resultsContainer.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search fa-2x" style="color: #ccc; margin-bottom: 15px;"></i>
                        <p>Type at least 2 characters to search</p>
                    </div>
                `;
                return;
            }

            const results = ethiopianProducts.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.tags?.some(tag => tag.toLowerCase().includes(query))
            );

            if (results.length === 0) {
                resultsContainer.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search fa-2x" style="color: #ccc; margin-bottom: 15px;"></i>
                        <p>No products found for "${query}"</p>
                    </div>
                `;
                return;
            }

            resultsContainer.innerHTML = results.map(product => `
                <div class="search-result-item" onclick="window.openProductModal(${product.id}); closeSearchModal();">
                    <img src="${product.images[0]}" alt="${product.name}" class="search-result-img">
                    <div class="search-result-info">
                        <h4>${product.name}</h4>
                        <p>${product.price} ETB</p>
                        <small>${product.category}</small>
                    </div>
                </div>
            `).join('');
        }

        // Shipping Calculator
        function calculateShipping() {
            const fromCity = document.getElementById('from-city').value;
            const toCity = document.getElementById('to-city').value;
            const weight = parseFloat(document.getElementById('package-weight').value);
            const deliveryType = document.getElementById('delivery-type').value;

            // Calculate costs based on parameters
            let baseCost = 0;
            let days = 0;

            // Base cost per kg
            const perKgCost = 50;
            baseCost = weight * perKgCost;

            // Adjust for distance
            if (fromCity !== toCity) {
                baseCost += 200; // Inter-city fee
                days += 2;
            }

            // Adjust for delivery type
            switch (deliveryType) {
                case 'express':
                    baseCost *= 1.5;
                    days = Math.max(1, days - 1);
                    break;
                case 'same-day':
                    baseCost *= 2;
                    days = 1;
                    break;
                default:
                    days += 3;
            }

            // Free delivery for orders over 1500 ETB
            const isFreeDelivery = totalCartValue() >= 1500;

            const result = document.getElementById('shipping-result');
            const timeElement = document.getElementById('shipping-time');
            const costElement = document.getElementById('shipping-cost');

            timeElement.textContent = `Estimated delivery: ${days} business day${days !== 1 ? 's' : ''}`;

            if (isFreeDelivery) {
                costElement.innerHTML = `<strong style="color: var(--eth-green);">FREE Delivery</strong>`;
            } else {
                costElement.textContent = `Shipping cost: ${Math.round(baseCost)} ETB`;
            }

            result.style.display = 'block';
            showToast('Shipping calculated successfully!', 'success');
        }

        // Loyalty Program
        function addPoints(amount) {
            userPoints += amount;
            updateLoyaltyDisplay();
            saveToStorage();
            showToast(`Earned ${amount} points!`, 'success');
        }

        function updateLoyaltyDisplay() {
            // Update points display
            const pointsElement = document.querySelector('.points-display');
            if (pointsElement) {
                pointsElement.textContent = userPoints.toLocaleString();
            }

            // Update loyalty level
            let level = 'Silver';
            if (userPoints >= 5000) level = 'Platinum';
            else if (userPoints >= 1000) level = 'Gold';

            // Update active level in UI
            document.querySelectorAll('.loyalty-level').forEach(el => {
                el.classList.remove('active');
                if (el.querySelector('h4').textContent === level) {
                    el.classList.add('active');
                }
            });
        }

        // Product Comparison
        function toggleComparison(productId) {
            const product = ethiopianProducts.find(p => p.id === productId);
            const index = comparisonProducts.findIndex(p => p.id === productId);

            if (index === -1) {
                if (comparisonProducts.length >= 4) {
                    showToast('Maximum 4 products can be compared', 'warning');
                    return;
                }
                comparisonProducts.push(product);
                showToast(`${product.name} added to comparison`, 'success');
            } else {
                comparisonProducts.splice(index, 1);
                showToast(`${product.name} removed from comparison`, 'warning');
            }

            updateComparisonUI();
            saveToStorage();
            renderProducts(); // Update compare icons on product cards
        }

        function updateComparisonUI() {
            // Update comparison grid
            for (let i = 1; i <= 4; i++) {
                const slot = document.getElementById(`comparison-slot-${i}`);
                const product = comparisonProducts[i - 1];

                if (product) {
                    slot.innerHTML = `
                        <img src="${product.images[0]}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px;">
                        <h4>${product.name}</h4>
                        <p>${product.price} ETB</p>
                        <button class="remove-comparison" onclick="window.removeFromComparison(${product.id})">
                            <i class="fas fa-times"></i>
                        </button>
                    `;
                } else {
                    slot.innerHTML = `
                        <p>Add product to compare</p>
                        <button class="btn" onclick="window.addToComparisonPrompt()">Add Product</button>
                    `;
                }
            }

            // Show/hide comparison table
            const table = document.getElementById('comparison-table');
            if (comparisonProducts.length >= 2) {
                table.style.display = 'block';
                updateComparisonTable();
            } else {
                table.style.display = 'none';
            }
        }

        function updateComparisonTable() {
            // Clear all cells first
            for (let i = 1; i <= 4; i++) {
                document.getElementById(`comp-product-${i}`).textContent = '-';
                document.getElementById(`comp-price-${i}`).textContent = '-';
                document.getElementById(`comp-rating-${i}`).textContent = '-';
                document.getElementById(`comp-material-${i}`).textContent = '-';
                document.getElementById(`comp-sizes-${i}`).textContent = '-';
                document.getElementById(`comp-delivery-${i}`).textContent = '-';
            }

            // Update with comparison products
            comparisonProducts.forEach((product, index) => {
                document.getElementById(`comp-product-${index + 1}`).textContent = product.name;
                document.getElementById(`comp-price-${index + 1}`).textContent = `${product.price} ETB`;
                document.getElementById(`comp-rating-${index + 1}`).textContent = product.rating;
                document.getElementById(`comp-material-${index + 1}`).textContent = product.material || 'Cotton';
                document.getElementById(`comp-sizes-${index + 1}`).textContent = product.sizes?.join(', ') || 'S,M,L,XL';
                document.getElementById(`comp-delivery-${index + 1}`).textContent = product.deliveryTime || '1-2 days';
            });
        }

        // Add to Comparison Prompt
        function addToComparisonPrompt() {
            showToast('Click the compare button on any product to add it to comparison', 'info');
        }

        // Remove from Comparison
        function removeFromComparison(productId) {
            comparisonProducts = comparisonProducts.filter(p => p.id !== productId);
            updateComparisonUI();
            saveToStorage();
            renderProducts(); // Update compare icons
            showToast('Product removed from comparison', 'warning');
        }

        // Clear Comparison
        function clearComparison() {
            comparisonProducts = [];
            updateComparisonUI();
            saveToStorage();
            renderProducts();
            showToast('Comparison cleared', 'info');
        }

        // Recently Viewed
        function addToRecentlyViewed(productId) {
            const index = recentlyViewed.indexOf(productId);
            if (index !== -1) recentlyViewed.splice(index, 1);
            recentlyViewed.unshift(productId);

            // Keep only last 10
            if (recentlyViewed.length > 10) {
                recentlyViewed.pop();
            }

            updateRecentlyViewed();
            saveToStorage();
        }

        function updateRecentlyViewed() {
            const grid = document.getElementById('recently-viewed-grid');
            if (recentlyViewed.length === 0) {
                grid.innerHTML = '<p>No recently viewed products</p>';
                return;
            }

            grid.innerHTML = recentlyViewed.map(id => {
                const product = ethiopianProducts.find(p => p.id === id);
                if (!product) return '';

                return `
                    <div class="product-card" style="cursor: pointer;" onclick="window.openProductModal(${product.id})">
                        <div class="product-img-container">
                            <img src="${product.images[0]}" alt="${product.name}" class="product-img">
                            <div class="quick-view">
                                <button class="quick-view-btn" data-id="${product.id}">View</button>
                            </div>
                        </div>
                        <div class="product-content">
                            <div class="product-header">
                                <h3 class="product-title">${product.name}</h3>
                                <span class="product-price">${product.price} ETB</span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Newsletter Popup
        function showNewsletterPopup() {
            const lastShown = localStorage.getItem('newsletterLastShown');
            const now = Date.now();
            const oneDay = 24 * 60 * 60 * 1000;

            if (!lastShown || (now - lastShown) > oneDay) {
                setTimeout(() => {
                    document.getElementById('newsletter-popup').classList.add('active');
                    document.body.style.overflow = 'hidden';
                }, 3000);
            }
        }

        function closeNewsletterPopup() {
            document.getElementById('newsletter-popup').classList.remove('active');
            document.body.style.overflow = 'auto';
            localStorage.setItem('newsletterLastShown', Date.now());
        }

        // Quick Shop Feature
        function quickShop() {
            // Show random product
            const randomIndex = Math.floor(Math.random() * ethiopianProducts.length);
            openProductModal(ethiopianProducts[randomIndex].id);
        }

        // Helper Functions
        function getRatingStars(rating) {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            let stars = '';

            for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
            if (hasHalfStar) stars += '<i class="fas fa-star-half-alt"></i>';
            for (let i = 0; i < 5 - Math.ceil(rating); i++) stars += '<i class="far fa-star"></i>';

            return stars;
        }

        function getContrastColor(hexcolor) {
            // If hex color is short form
            if (hexcolor.length === 4) {
                hexcolor = '#' + hexcolor[1] + hexcolor[1] + hexcolor[2] + hexcolor[2] + hexcolor[3] + hexcolor[3];
            }

            const r = parseInt(hexcolor.substr(1, 2), 16);
            const g = parseInt(hexcolor.substr(3, 2), 16);
            const b = parseInt(hexcolor.substr(5, 2), 16);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            return brightness > 128 ? '#000000' : '#FFFFFF';
        }

        function totalCartValue() {
            return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        }

        function isInWishlist(productId) {
            return wishlist.some(item => item.id === productId);
        }

        function isInComparison(productId) {
            return comparisonProducts.some(item => item.id === productId);
        }

        // Storage Functions
        function saveToStorage() {
            localStorage.setItem('fitzone_cart', JSON.stringify(cart));
            localStorage.setItem('fitzone_wishlist', JSON.stringify(wishlist));
            localStorage.setItem('fitzone_comparison', JSON.stringify(comparisonProducts));
            localStorage.setItem('fitzone_recently_viewed', JSON.stringify(recentlyViewed));
            localStorage.setItem('fitzone_points', userPoints.toString());
        }

        function loadFromStorage() {
            try {
                cart = JSON.parse(localStorage.getItem('fitzone_cart') || '[]');
                wishlist = JSON.parse(localStorage.getItem('fitzone_wishlist') || '[]');
                comparisonProducts = JSON.parse(localStorage.getItem('fitzone_comparison') || '[]');
                recentlyViewed = JSON.parse(localStorage.getItem('fitzone_recently_viewed') || '[]');
                userPoints = parseInt(localStorage.getItem('fitzone_points') || '1250');

                updateCartDisplay();
                updateWishlistDisplay();
                updateComparisonUI();
                updateRecentlyViewed();
                updateLoyaltyDisplay();
            } catch (e) {
                console.log('Error loading from storage:', e);
                // Reset to defaults
                cart = [];
                wishlist = [];
                comparisonProducts = [];
                recentlyViewed = [];
                userPoints = 1250;
            }
        }

        // Countdown Timer
        function startCountdown() {
            let hours = 24;
            let minutes = 59;
            let seconds = 59;

            const interval = setInterval(() => {
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                }
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                }
                if (hours < 0) {
                    clearInterval(interval);
                    // Reset for demo
                    hours = 24;
                    minutes = 59;
                    seconds = 59;
                }

                document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');
            }, 1000);
        }

        // Mobile Menu
        function toggleMobileMenu() {
            document.querySelector('.nav-links').classList.toggle('active');
        }

        // Smooth Scrolling
        function handleSmoothScroll(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                document.querySelector('.nav-links').classList.remove('active');
            }
        }

        // WhatsApp Integration
        function openWhatsApp() {
            const phone = '+251912345678';
            const message = 'Hello FITZONE, I have a question about your products.';
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
            showToast('Opening WhatsApp...', 'info');
        }

        // Close All Modals
        function closeAllModals() {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
            document.querySelectorAll('.cart-modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
            document.querySelectorAll('.payment-modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
            document.querySelectorAll('.confirmation-modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.style.overflow = 'auto';
        }

        // Close Product Modal
        function closeProductModal() {
            document.getElementById('product-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Product Filtering
        function handleFilter(e) {
            const filter = e.target.dataset.filter;
            if (!filter) return;

            // Update active button
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            // Filter products
            currentFilter = filter;
            displayedProducts = 12;
            renderProducts();

            // Scroll to products section
            document.getElementById('products').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Render Products Grid
        function renderProducts() {
            let filteredProducts = ethiopianProducts;

            switch (currentFilter) {
                case 'new':
                    filteredProducts = ethiopianProducts.filter(p => p.badge === 'New' || p.tags?.includes('new'));
                    break;
                case 'trending':
                    filteredProducts = ethiopianProducts.filter(p => p.trending);
                    break;
                case 'sale':
                    filteredProducts = ethiopianProducts.filter(p => p.originalPrice);
                    break;
                case 'all':
                    // Show all
                    break;
                default:
                    filteredProducts = ethiopianProducts.filter(p => p.category === currentFilter);
            }

            const productsToShow = filteredProducts.slice(0, displayedProducts);
            const grid = document.getElementById('products-grid');

            grid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');

            // Update load more button
            const loadMoreBtn = document.getElementById('load-more');
            if (loadMoreBtn) {
                loadMoreBtn.style.display = displayedProducts >= filteredProducts.length ? 'none' : 'inline-block';
            }
        }

        function createProductCard(product) {
            const stockPercentage = (product.stock / 50) * 100;
            const stockClass = stockPercentage < 30 ? 'stock-low' : '';
            const isInWish = isInWishlist(product.id);
            const isInComp = isInComparison(product.id);

            return `
                <div class="product-card">
                    ${product.badge ? `<div class="product-badge ${product.badge === 'Sale' ? 'product-sale-badge' : ''}">${product.badge}</div>` : ''}
                    <div class="product-img-container">
                        <img src="${product.images[0]}" alt="${product.name}" class="product-img">
                        <div class="product-gallery">
                            ${product.images.slice(0, 3).map((img, i) => `
                                <img src="${img}" class="gallery-thumb" data-index="${i}" alt="Thumb ${i + 1}">
                            `).join('')}
                        </div>
                        <div class="stock-bar ${stockClass}">
                            <div class="stock-level" style="width: ${stockPercentage}%"></div>
                            <div class="stock-info">${product.stock} left</div>
                        </div>
                        <div class="quick-view">
                            <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
                        </div>
                    </div>
                    <div class="product-content">
                        <div class="product-header">
                            <h3 class="product-title">${product.name}</h3>
                            <div>
                                <span class="product-price">${product.price} ETB</span>
                                ${product.originalPrice ? `
                                    <span class="product-old-price">${product.originalPrice} ETB</span>
                                ` : ''}
                            </div>
                        </div>
                        <p class="product-desc">${product.description}</p>
                        ${product.tags ? `
                            <div class="product-tags">
                                ${product.tags.slice(0, 3).map(tag => `
                                    <span class="product-tag">${tag}</span>
                                `).join('')}
                            </div>
                        ` : ''}
                        <div class="product-footer">
                            <div class="product-rating">
                                ${getRatingStars(product.rating)} (${product.reviews})
                            </div>
                            <div class="product-actions">
                                <button class="action-btn ${isInComp ? 'compare-btn active' : 'compare-btn'}" 
                                        onclick="window.toggleComparison(${product.id})">
                                    <i class="fas fa-exchange-alt"></i>
                                </button>
                                <button class="action-btn ${isInWish ? 'wishlisted' : ''}" 
                                        onclick="window.toggleWishlist(${product.id})">
                                    <i class="${isInWish ? 'fas' : 'far'} fa-heart"></i>
                                </button>
                                <button class="action-btn add-to-cart" onclick="window.addToCart(${product.id})">
                                    <i class="fas fa-shopping-bag"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function loadMoreProducts() {
            displayedProducts += 12;
            renderProducts();
        }

        // Wishlist Functions
        function toggleWishlist(productId) {
            const product = ethiopianProducts.find(p => p.id === productId);
            const index = wishlist.findIndex(item => item.id === productId);

            if (index === -1) {
                wishlist.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0]
                });
                showToast(`${product.name} added to wishlist`, 'success');
            } else {
                wishlist.splice(index, 1);
                showToast(`${product.name} removed from wishlist`, 'warning');
            }

            updateWishlistDisplay();
            saveToStorage();
            renderProducts(); // Update wishlist icons
        }

        function updateWishlistDisplay() {
            const wishlistCountElement = document.querySelector('.wishlist-count');
            if (wishlistCountElement) {
                wishlistCountElement.textContent = wishlist.length;
            }
        }

        // Newsletter Handlers
        function handleNewsletter(e) {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            showToast(`Thank you for subscribing with ${email}!`, 'success');
            e.target.reset();
        }

        function handlePopupNewsletter(e) {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            closeNewsletterPopup();
            showToast(`Thank you! 10% discount code: FITZONE10`, 'success');
            e.target.reset();
        }

        // Buy Now Function
        function buyNow(productId, quantity = 1) {
            const product = ethiopianProducts.find(p => p.id === productId);
            if (!product) return;

            // Add to cart with quantity
            const existing = cart.find(item => item.id === productId);
            if (existing) {
                existing.quantity += quantity;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity,
                    image: product.images[0]
                });
            }

            // Add points
            const pointsEarned = Math.floor((product.price * quantity) / 10);
            addPoints(pointsEarned);

            updateCartDisplay();
            updateCartModal();
            saveToStorage();
            closeProductModal();
            openPaymentModal();
            showToast('Proceeding to checkout...', 'info');
        }

        // Add to Cart from Modal
        function addToCartFromModal(productId, quantity = 1) {
            const product = ethiopianProducts.find(p => p.id === productId);

            if (!product) return;

            const existing = cart.find(item => item.id === productId);
            if (existing) {
                existing.quantity += quantity;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity,
                    image: product.images[0]
                });
            }

            // Add points
            const pointsEarned = Math.floor((product.price * quantity) / 10);
            addPoints(pointsEarned);

            updateCartDisplay();
            updateCartModal();
            saveToStorage();
            showToast(`${quantity} x ${product.name} added to cart`, 'success');
        }

        // Make functions globally accessible
        window.addToCart = addToCart;
        window.toggleWishlist = toggleWishlist;
        window.toggleComparison = toggleComparison;
        window.openProductModal = openProductModal;
        window.removeFromComparison = removeFromComparison;
        window.addToComparisonPrompt = addToComparisonPrompt;
        window.increaseQuantity = increaseQuantity;
        window.decreaseQuantity = decreaseQuantity;
        window.removeFromCart = removeFromCart;
        window.clearCart = clearCart;

        // Initialize product rendering
        renderProducts();
        updateRecentlyViewed();