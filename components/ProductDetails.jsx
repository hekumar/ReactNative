import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    FlatList,
} from 'react-native';

const { width } = Dimensions.get('window');

const ProductDetails = ({ route }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { product } = route.params;
    // Sample product data - replace with your actual data
    const sampleProduct = {
        id: 1,
        name: 'iPhone 15 Pro Max',
        brand: 'Apple',
        price: 1199,
        originalPrice: 1299,
        discount: 8,
        rating: 4.5,
        reviewCount: 2847,
        images: [
            'https://via.placeholder.com/400x400/007acc/ffffff?text=Image+1',
            'https://via.placeholder.com/400x400/28a745/ffffff?text=Image+2',
            'https://via.placeholder.com/400x400/dc3545/ffffff?text=Image+3',
        ],
        description: 'Experience the pinnacle of smartphone technology with advanced features and stunning design.',
        features: [
            'A17 Pro chip with 6-core GPU',
            'ProRAW and ProRes video recording',
            'Titanium design with Action Button',
            '48MP Main camera system',
            'Up to 29 hours video playback',
            '5G connectivity',
        ],
        specifications: {
            'Display': '6.7-inch Super Retina XDR',
            'Processor': 'A17 Pro chip',
            'Storage': '256GB',
            'Camera': '48MP + 12MP + 12MP',
            'Battery': '4441 mAh',
            'OS': 'iOS 17',
            'Weight': '221g',
            'Colors': 'Natural Titanium, Blue Titanium, White Titanium, Black Titanium',
        },
        bankOffers: [
            {
                bank: 'HDFC Bank',
                offer: '10% Instant Discount',
                details: 'Up to ₹1,500 discount on Credit Card',
                code: 'HDFC10',
            },
            {
                bank: 'SBI Card',
                offer: '5% Cashback',
                details: 'Up to ₹1,000 cashback on all purchases',
                code: 'SBI5',
            },
            {
                bank: 'ICICI Bank',
                offer: '0% EMI',
                details: 'No cost EMI for 6 months',
                code: 'ICICI0',
            },
        ],
        reviews: [
            {
                id: 1,
                user: 'John D.',
                rating: 5,
                comment: 'Excellent phone with amazing camera quality!',
                date: '2024-01-15',
                helpful: 24,
            },
            {
                id: 2,
                user: 'Sarah M.',
                rating: 4,
                comment: 'Great performance but battery could be better.',
                date: '2024-01-10',
                helpful: 18,
            },
            {
                id: 3,
                user: 'Mike R.',
                rating: 5,
                comment: 'Premium build quality and smooth performance.',
                date: '2024-01-08',
                helpful: 31,
            },
        ],
    };

    const productData = { ...sampleProduct, ...product };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Text key={i} style={styles.star}>★</Text>);
        }
        if (hasHalfStar) {
            stars.push(<Text key="half" style={styles.star}>☆</Text>);
        }
        for (let i = stars.length; i < 5; i++) {
            stars.push(<Text key={i} style={styles.emptyStar}>☆</Text>);
        }
        return stars;
    };

    const renderImageCarousel = () => (
        <View style={styles.imageContainer}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(event.nativeEvent.contentOffset.x / width);
                    setCurrentImageIndex(index);
                }}
            >
                {productData.images.map((image, index) => (
                    <Image key={index} source={{ uri: image }} style={styles.productImage} />
                ))}
            </ScrollView>
            <View style={styles.imageIndicators}>
                {productData.images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            currentImageIndex === index && styles.activeIndicator,
                        ]}
                    />
                ))}
            </View>
        </View>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.sectionTitle}>Description</Text>
                        <Text style={styles.description}>{productData.description}</Text>

                        <Text style={styles.sectionTitle}>Key Features</Text>
                        {productData.features.map((feature, index) => (
                            <View key={index} style={styles.featureItem}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.featureText}>{feature}</Text>
                            </View>
                        ))}
                    </View>
                );

            case 'specifications':
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.sectionTitle}>Technical Specifications</Text>
                        {Object.entries(productData.specifications).map(([key, value]) => (
                            <View key={key} style={styles.specRow}>
                                <Text style={styles.specKey}>{key}</Text>
                                <Text style={styles.specValue}>{value}</Text>
                            </View>
                        ))}
                    </View>
                );

            case 'reviews':
                return (
                    <View style={styles.tabContent}>
                        <View style={styles.reviewSummary}>
                            <Text style={styles.sectionTitle}>Customer Reviews</Text>
                            <View style={styles.ratingOverview}>
                                <Text style={styles.overallRating}>{productData.rating}</Text>
                                <View style={styles.starsContainer}>
                                    {renderStars(productData.rating)}
                                </View>
                                <Text style={styles.reviewCount}>({productData.reviewCount} reviews)</Text>
                            </View>
                        </View>

                        {productData.reviews.map((review) => (
                            <View key={review.id} style={styles.reviewItem}>
                                <View style={styles.reviewHeader}>
                                    <Text style={styles.reviewUser}>{review.user}</Text>
                                    <View style={styles.reviewStars}>
                                        {renderStars(review.rating)}
                                    </View>
                                </View>
                                <Text style={styles.reviewComment}>{review.comment}</Text>
                                <View style={styles.reviewFooter}>
                                    <Text style={styles.reviewDate}>{review.date}</Text>
                                    <Text style={styles.helpful}>👍 {review.helpful} helpful</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                );

            case 'offers':
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.sectionTitle}>Bank Offers</Text>
                        {productData.bankOffers.map((offer, index) => (
                            <View key={index} style={styles.offerCard}>
                                <View style={styles.offerHeader}>
                                    <Text style={styles.bankName}>{offer.bank}</Text>
                                    <Text style={styles.offerTitle}>{offer.offer}</Text>
                                </View>
                                <Text style={styles.offerDetails}>{offer.details}</Text>
                                <Text style={styles.offerCode}>Code: {offer.code}</Text>
                            </View>
                        ))}
                    </View>
                );

            default:
                return null;
        }
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Image Carousel */}
            {renderImageCarousel()}

            {/* Product Info */}
            <View style={styles.productInfo}>
                <Text style={styles.brand}>{productData.brand}</Text>
                <Text style={styles.productName}>{productData.name}</Text>

                {/* Rating */}
                <View style={styles.ratingContainer}>
                    <View style={styles.starsContainer}>
                        {renderStars(productData.rating)}
                    </View>
                    <Text style={styles.ratingText}>
                        {productData.rating} ({productData.reviewCount} reviews)
                    </Text>
                </View>

                {/* Price */}
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>${productData.price}</Text>
                    {productData.originalPrice && (
                        <Text style={styles.originalPrice}>${productData.originalPrice}</Text>
                    )}
                    {productData.discount && (
                        <Text style={styles.discount}>{productData.discount}% OFF</Text>
                    )}
                </View>
            </View>

            {/* Tabs */}
            <View style={styles.tabsContainer}>
                {['overview', 'specifications', 'reviews', 'offers'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.tab, activeTab === tab && styles.activeTab]}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Tab Content */}
            {renderTabContent()}

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buyNowButton}>
                    <Text style={styles.buyNowText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        position: 'relative',
    },
    productImage: {
        width: width,
        height: 300,
        resizeMode: 'cover',
    },
    imageIndicators: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginHorizontal: 4,
    },
    activeIndicator: {
        backgroundColor: '#fff',
    },
    productInfo: {
        padding: 16,
    },
    brand: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    starsContainer: {
        flexDirection: 'row',
        marginRight: 8,
    },
    star: {
        color: '#FFD700',
        fontSize: 18,
    },
    emptyStar: {
        color: '#E5E5E5',
        fontSize: 18,
    },
    ratingText: {
        fontSize: 14,
        color: '#666',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#007acc',
        marginRight: 12,
    },
    originalPrice: {
        fontSize: 18,
        color: '#999',
        textDecorationLine: 'line-through',
        marginRight: 8,
    },
    discount: {
        fontSize: 14,
        color: '#28a745',
        fontWeight: 'bold',
    },
    tabsContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        backgroundColor: '#f8f9fa',
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#007acc',
    },
    tabText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    activeTabText: {
        color: '#007acc',
        fontWeight: 'bold',
    },
    tabContent: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
        marginBottom: 20,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    bullet: {
        fontSize: 16,
        color: '#007acc',
        marginRight: 8,
        marginTop: 2,
    },
    featureText: {
        fontSize: 16,
        color: '#333',
        flex: 1,
    },
    specRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    specKey: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        flex: 1,
    },
    specValue: {
        fontSize: 16,
        color: '#666',
        flex: 1,
        textAlign: 'right',
    },
    reviewSummary: {
        marginBottom: 20,
    },
    ratingOverview: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    overallRating: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 12,
    },
    reviewCount: {
        fontSize: 14,
        color: '#666',
        marginLeft: 8,
    },
    reviewItem: {
        backgroundColor: '#f8f9fa',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    reviewUser: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    reviewStars: {
        flexDirection: 'row',
    },
    reviewComment: {
        fontSize: 16,
        color: '#666',
        lineHeight: 22,
        marginBottom: 8,
    },
    reviewFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reviewDate: {
        fontSize: 12,
        color: '#999',
    },
    helpful: {
        fontSize: 12,
        color: '#28a745',
    },
    offerCard: {
        backgroundColor: '#f8f9fa',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#007acc',
    },
    offerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    bankName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    offerTitle: {
        fontSize: 14,
        color: '#28a745',
        fontWeight: 'bold',
    },
    offerDetails: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    offerCode: {
        fontSize: 14,
        color: '#007acc',
        fontWeight: 'bold',
    },
    actionButtons: {
        flexDirection: 'row',
        padding: 16,
        gap: 12,
    },
    addToCartButton: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#007acc',
    },
    addToCartText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007acc',
    },
    buyNowButton: {
        flex: 1,
        backgroundColor: '#007acc',
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buyNowText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default ProductDetails;