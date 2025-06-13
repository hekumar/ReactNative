import { StyleSheet } from "react-native";

const accountStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa"
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef"
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#212529",
    textAlign: "center"
  },
  photoSection: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4
  },
  photoContainer: {
    position: "relative",
    marginBottom: 20
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#e9ecef"
  },
  editPhotoButton: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#007bff",
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4
  },
  editPhotoText: {
    fontSize: 16
  },
  userName: {
    fontSize: 28,
    fontWeight: "700",
    color: "#212529",
    marginBottom: 8
  },
  userEmail: {
    fontSize: 16,
    color: "#6c757d",
    marginBottom: 15
  },
  membershipBadge: {
    backgroundColor: "#28a745",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20
  },
  membershipText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600"
  },
  menuSection: {
    marginTop: 30,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#495057",
    marginBottom: 15,
    marginLeft: 5
  },
  menuContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: "hidden"
  },
  menuButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: "#ffffff"
  },
  logoutButton: {
    backgroundColor: "#fff5f5"
  },
  menuButtonLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16
  },
  logoutIconContainer: {
    backgroundColor: "#fee2e2"
  },
  iconText: {
    fontSize: 20
  },
  logoutIconText: {
    fontSize: 20
  },
  menuButtonText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#212529",
    flex: 1
  },
  logoutText: {
    color: "#dc3545"
  },
  arrowText: {
    fontSize: 24,
    color: "#ced4da",
    fontWeight: "300"
  },
  logoutArrowText: {
    color: "#dc3545"
  },
  separator: {
    height: 1,
    backgroundColor: "#f8f9fa",
    marginLeft: 80
  },
  logoutSection: {
    marginTop: 20,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: "hidden"
  },
  bottomSpacing: {
    height: 40
  }
});

export default accountStyles;