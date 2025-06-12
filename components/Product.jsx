import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import productStyles from "../styles/productStyles";
import TouchableButton from './common/TouchableButton';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { CART_ACTIONS, CartContext, useCart } from '../contexts/cartContext';



const Product = ({
  id,
  image,
  title,
  description,
  price,
  originalPrice,
  discount,
  tag,
  category,
  colors = [],
  onPress,
  onColorSelect,
}) => {
  const discountPercentage = originalPrice && price
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : discount;

  const renderActionOtions = () => {
      const { shoppingCart, dispatch } = React.useContext(CartContext);

    return (
      <View style={{ gap: 10 }}>
        <TouchableButton
          title="Add to Cart"
          variant="primary"
          size="small"
          onPress={() => {
            console.log('Add to cart pressed');
            // dispatching an action ADD_TO_CART
            dispatch({
              type: CART_ACTIONS.ADD_TO_CART, payload: {
                id,
                image,
                title,
                description,
                price,
                originalPrice,
                discount,
                tag,
                category,
                colors
              }
            })
          }}
          icon={<AntDesign
            name='shoppingcart'
            size={25}
            style={{ color: 'black' }}
          />}
        />
        <TouchableButton
          title="Buy Now"
          variant="secondary"
          size="small"
          onPress={() => console.log('Buy now pressed')}
        />

      </View>
    )
  }

  const renderColorOptions = () => {
    if (!colors.length) return null;

    return (
      <View style={productStyles.colorsContainer}>
        <Text style={productStyles.colorsLabel}>Colors:</Text>
        <View style={productStyles.colorsList}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                productStyles.colorOption,
                { backgroundColor: color.value || color },
              ]}
              onPress={() => onColorSelect && onColorSelect(color)}
            >
              {color.name && (
                <Text style={productStyles.colorName}>{color.name}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const renderTag = () => {
    if (!tag) return null;

    return (
      <View style={[productStyles.tag, productStyles[`tag${tag.type || 'default'}`]]}>
        <Text style={[productStyles.tagText, productStyles[`tagText${tag.type || 'default'}`]]}>
          {tag.text || tag}
        </Text>
      </View>
    );
  };

  const renderDiscount = () => {
    if (!discountPercentage) return null;

    return (
      <View style={productStyles.discountBadge}>
        <Text style={productStyles.discountText}>-{discountPercentage}%</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity style={productStyles.container} onPress={onPress}>
      <View style={productStyles.imageContainer}>
        <Image source={{ uri: image }} style={productStyles.image} />
        {renderDiscount()}
        {renderTag()}
      </View>

      <View style={productStyles.contentContainer}>
        {category && (
          <Text style={productStyles.category}>{category.toUpperCase()}</Text>
        )}

        <Text style={productStyles.title} numberOfLines={2}>
          {title}
        </Text>

        <Text style={productStyles.description} numberOfLines={3}>
          {description}
        </Text>

        <View style={productStyles.priceContainer}>
          <Text style={productStyles.price}>${price}</Text>
          {originalPrice && originalPrice > price && (
            <Text style={productStyles.originalPrice}>${originalPrice}</Text>
          )}
        </View>

        {renderColorOptions()}
        {renderActionOtions()}
      </View>
    </TouchableOpacity>
  );
};



export default Product;