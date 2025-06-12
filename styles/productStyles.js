import { StyleSheet } from "react-native";

export default (productStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 8,
    overflow: "hidden"
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 200
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  contentContainer: {
    padding: 16
  },
  category: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    marginBottom: 4,
    letterSpacing: 0.5
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
    lineHeight: 24
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
    lineHeight: 20
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2c5aa0",
    marginRight: 8
  },
  originalPrice: {
    fontSize: 16,
    color: "#999",
    textDecorationLine: "line-through"
  },
  discountBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#ff4444",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 1
  },
  discountText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700"
  },
  tag: {
    position: "absolute",
    top: 12,
    left: 12,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 1
  },
  tagdefault: {
    backgroundColor: "#007AFF"
  },
  tagTextdefault: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600"
  },
  tagnew: {
    backgroundColor: "#34C759"
  },
  tagTextnew: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600"
  },
  tagsale: {
    backgroundColor: "#FF9500"
  },
  tagTextsale: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600"
  },
  tagfeatured: {
    backgroundColor: "#AF52DE"
  },
  tagTextfeatured: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600"
  },
  colorsContainer: {
    marginTop: 8
  },
  colorsLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8
  },
  colorsList: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  colorOption: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 4,
    borderWidth: 2,
    borderColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center"
  },
  colorName: {
    fontSize: 10,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center"
  }
}));
