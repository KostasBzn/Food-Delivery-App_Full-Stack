import Restaurant from "../models/restaurantSchema.js";

//Add new restaurant
export const handleAddNewReastaurant = async (req, res) => {
  try {
    const { name, description, address } = req.body;

    const newReastaurant = new Restaurant({
      name,
      description,
      address,
    });
    await newReastaurant.save();

    res.send({ success: true, newUser });
    console.log("New restaurant created successfully:", newUser);
  } catch (error) {
    console.error("Error creating the restaurant");
    res.status(500).json({ success: false, error: error.message });
  }
};

// Add many restaurants
export const handleAddManyRestaurants = async (req, res) => {
  try {
    const restaurantsData = req.body;

    const newRestaurants = await Restaurant.insertMany(restaurantsData);

    res.send({ success: true, newRestaurants });
    console.log("New restaurants created successfully:", newRestaurants);
  } catch (error) {
    console.error("Error creating the restaurants");
    res.status(500).send({ success: false, error: error.message });
  }
};

//logged user
export const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.send({ success: true, restaurants });
  } catch (error) {
    console.log("Error getting all restaurants:", error.message);
    res.status(500).send({ success: false, error: error.message });
  }
};