import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Cookie from "js-cookie";
import serverUrl from "../serverUrl";
import AddressAutocomplete from "../components/AutoComplete";
const Sell = () => {
  const [userId, setUserId] = useState(null);
  const [autoComplete, setAutoComplete] = useState({
    lat: "",
    lng: "",
    address: "",
  });
  useEffect(() => {
    document.title = "RealHome | List Your Property";
    try {
      setUserId(JSON.parse(Cookie.get("user"))._id);
      console.log(JSON.parse(Cookie.get("user"))._id);
    } catch (error) {
      console.log("User not logged in");
    }
  }, []);

  function handleAutoComplete(e) {
    setAutoComplete(e);
  }

  useEffect(() => {
    console.log(autoComplete);
  }, [autoComplete]);

  return (
    <div className="Sell">
      <Navbar />

      <section class="sell-property">
        <h2>
          List Your <span>Property</span>
        </h2>
        <form
          id="property-form"
          action={serverUrl + "/list-property"}
          method="post"
          enctype="multipart/form-data"
        >
          <input type="text" hidden="true" name="userId" value={userId} />
          <div class="form-section">
            <h3>Property Details</h3>
            <label for="listingType">Listing Type:</label>
            <select id="listingType" name="listingType">
              <option value="buy" name="listingType">
                Sale
              </option>
              <option value="rent" name="listingType">
                Rental
              </option>
            </select>

            <label for="propertyType">Property Type:</label>
            <select id="propertyType" name="propertyType">
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Townhouse">Townhouse</option>
            </select>

            <label for="erfSize">Erf Size (m²):</label>
            <input type="number" id="erfSize" name="erfSize" required />

            <label for="address">Address:</label>
            <AddressAutocomplete onChange={handleAutoComplete} />
            <input
              type="hidden"
              id="address"
              name="address"
              value={autoComplete.address}
              required
            />
            <input
              type="hidden"
              id="lat"
              name="lat"
              value={autoComplete.lat}
              required
            />
            <input
              type="hidden"
              id="lng"
              name="lng"
              value={autoComplete.lng}
              required
            />

            <label for="city">City:</label>
            <input type="text" id="city" name="city" required />

            <label for="suburb">Suburb:</label>
            <input type="text" id="suburb" name="suburb" required />

            <label for="province">Province:</label>
            <input type="text" id="province" name="province" required />
          </div>

          <div class="form-section">
            <h3>Contacts</h3>
            <label for="sellerName">Seller/Landlord Name:</label>
            <input type="text" id="sellerName" name="sellerName" required />

            <label for="sellerEmail">Seller/Landlord Email:</label>
            <input type="email" id="sellerEmail" name="sellerEmail" required />

            <label for="seller-mobile">Seller/Landlord Mobile Number:</label>
            <input type="tel" id="sellerMobile" name="sellerMobile" required />

            <label for="agent-name">Listing Agent Name:</label>
            <input type="text" id="agent-name" name="agentName" />

            <label for="agent-email">Listing Agent Email:</label>
            <input type="email" id="agent-email" name="agentEmail" />

            <label for="agent-mobile">Listing Agent Mobile Number:</label>
            <input type="tel" id="agent-mobile" name="agentMobile" />
          </div>

          <div class="form-section">
            <h3>Marketing</h3>
            <label for="list-price">List Price (R):</label>
            <input type="number" id="list-price" name="listPrice" required />

            <label for="rates">Rates (R):</label>
            <input type="number" id="rates" name="rates" />

            <label for="levies">Levies (R):</label>
            <input type="number" id="levies" name="levies" />

            <label for="listing-heading">Listing Heading:</label>
            <input
              type="text"
              id="listing-heading"
              name="listingHeading"
              required
            />

            <label for="listing-description">Listing Description:</label>
            <textarea
              id="listing-description"
              name="listingDescription"
              rows="5"
              required
            ></textarea>

            <label for="property-images">Upload Images:</label>
            <h5>
              Note that for best results, an image size of 1920x1080 is
              recommended.
            </h5>
            <input
              type="file"
              id="property-images"
              name="property-images"
              multiple
            />
          </div>

          <div class="form-section">
            <h3>Features</h3>
            <label for="pets-allowed">Pets Allowed:</label>
            <select id="petsAllowed" name="petsAllowed">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label for="bedrooms">Bedrooms:</label>
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              placeholder="Amount of bedrooms"
            />

            <label for="bathrooms">Bathrooms:</label>
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              placeholder="Amount of bathrooms"
            />

            <label for="carports">Garages:</label>
            <input
              type="number"
              id="carports"
              name="garage"
              placeholder="2 if double garage"
            />

            <div className="additional-features">
              <label for="kitchen">Kitchen:</label>
              <input
                type="checkbox"
                id="kitchen"
                name="kitchen"
                value="Kitchen"
              />

              <label for="living-room">Living Room:</label>
              <input
                type="checkbox"
                id="living-room"
                name="livingRoom"
                value="Living Room"
              />

              <label for="study">Study/Office:</label>
              <input
                type="checkbox"
                id="study"
                name="study"
                value="Study/Office"
              />

              {/* <label for="garage">Garage:</label>
              <input
                type="checkbox"
                id="garage"
                name="features"
                value="Garage"
              /> */}

              <label for="carport">Carport:</label>
              <input
                type="checkbox"
                id="carport"
                name="carport"
                value="Carport"
              />

              <label for="garden">Garden:</label>
              <input type="checkbox" id="garden" name="garden" value="Garden" />

              <label for="pool">Pool:</label>
              <input type="checkbox" id="pool" name="pool" value="Pool" />

              <label for="flatlet">Flatlet:</label>
              <input
                type="checkbox"
                id="flatlet"
                name="flatlet"
                value="Flatlet"
              />
            </div>
          </div>

          <div class="form-section">
            <h3>Additional Features</h3>
            <textarea
              id="additional-features"
              name="additionalFeatures"
              rows="3"
              placeholder="Add any additional features"
            ></textarea>
          </div>

          <button type="submit">Submit Property</button>
        </form>
      </section>
    </div>
  );
};

export default Sell;
