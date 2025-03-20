export const LayoutForm = () => (
  <form className="Form">
    <fieldset className="Form-section">
      <div className="Form-columnFull">
        <legend className="Heading-H2">Profile</legend>
        <p className="Text">Fill out your profile information</p>
      </div>
      <label className="Form-columnFull">
        <span className="Control-label">Username</span>
        <input type="text" name="username" placeholder="Jane Doe" className="Input" />
      </label>
      <label className="Form-columnFull">
        <span className="Control-label">About</span>
        <textarea name="about" className="Input"></textarea>
      </label>
      <label className="Form-columnFull">
        <span className="Control-label">Profile Picture</span>
        <input name="file-upload" type="file" hidden />
        <p className="Form-ColumnInfo">PNG, JPG, GIF up to 10MB</p>
      </label>
    </fieldset>

    <fieldset className="Form-section">
      <div className="Form-columnFull">
        <legend className="Heading-H2">Personal Information</legend>
        <p className="Text">Use a permanent address where you can receive mail.</p>
      </div>
      <label className="Form-columnHalf">
        <span className="Control-label">First name</span>
        <input type="text" autoComplete="given-name" className="Input" />
      </label>
      <label className="Form-columnHalf">
        <span className="Control-label">Last name</span>
        <input type="text" autoComplete="family-name" className="Input" />
      </label>
      <label className="Form-columnThird">
        <span className="Control-label">Email address</span>
        <input type="email" autoComplete="email" className="Input" />
      </label>
      <label className="Form-columnThird">
        <span className="Control-label">Phone number</span>
        <input type="tel" autoComplete="tel" className="Input" />
      </label>
      <label className="Form-columnThird">
        <span className="Control-label">Country</span>
        <select name="country" className="Select">
          <option value="finland">Finland</option>
          <option value="estonia">Estonia</option>
          <option value="lithuania">Lithuania</option>
          <option value="latvia">Latvia</option>
        </select>
      </label>
      <label className="Form-columnThird">
        <span className="Control-label">City</span>
        <input type="text" className="Input" />
      </label>
      <label className="Form-columnThird">
        <span className="Control-label">State</span>
        <input type="text" className="Input" />
      </label>
      <label className="Form-columnThird">
        <span className="Control-label">Zip Code</span>
        <input type="text" className="Input" />
      </label>
    </fieldset>

    <fieldset className="Form-section">
      <div className="Form-columnFull">
        <legend className="Heading-H2">Notifications</legend>
        <p className="Text">We’ll always let you know about changes</p>
      </div>
      <div className="Form-columnFull">
        <label className="Checkbox-label">
          <input name="comments" type="checkbox" className="Checkbox" />
          <span className="Control-label">Adverts</span>
        </label>
        <label className="Checkbox-label">
          <input name="offers" type="checkbox" className="Checkbox" />
          <span className="Control-label">Offers</span>
        </label>
      </div>
    </fieldset>

    <div className="Form-columnFull">
      <button type="submit" className="Button">
        Save
      </button>
    </div>
  </form>
);
