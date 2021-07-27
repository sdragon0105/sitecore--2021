<template>
  <div class="container user-info--background_img_style">
    <!-- <div style="background: black; opacity: 0.4; z-index: 1; height: 100vh; width: 100vw; position: absolute; top: 0; left: 0;"></div> -->

    <a href="/"
      ><img src="../assets/logo.png" class="logo_img_style" style="z-index:2;"
    /></a>

    <div v-if="user_info" class="user-info--content_style">
      <div class="user-info--txt_content">
        <h1 class="user-info--header_style">
          Order your Sitecore<br />
          new-hire gift
        </h1>
        <p class="user-info--sub_content_style">
          Please complete the form to<br />
          receive your new-hire gift.
        </p>
        <a class="user-info--link_txt_style"
          >Click here to view the<br />
          hoodie conversion chart</a
        >
      </div>

      <div class="user-info--user-info-field">
        <div class="txt-double-contaner">
          <input
            type="text"
            class="txt_field_style"
            placeholder="Preferred name*"
            v-model="preferred_name"
          />
          <input
            type="text"
            class="txt_field_style"
            placeholder="Surname*"
            v-model="surname"
          />
        </div>
        <div class="txt-double-contaner">
          <input
            type="text"
            class="txt_field_style"
            placeholder="Start date*"
            v-model="start_date"
          />
          <input
            type="text"
            class="txt_field_style"
            placeholder="Email address*"
            v-model="email"
          />
        </div>
        <div class="txt-double-contaner">
          <input
            type="text"
            class="txt_field_style"
            placeholder="Mobile phone*"
            v-model="phone"
          />
          <input
            type="text"
            class="txt_field_style"
            placeholder="Hoodie Size*"
            v-model="hoodie_size"
          />
        </div>
        <div class="txt-single-contaner">
          <input
            type="text"
            class="txt_field_style"
            placeholder="Delivery address*"
            v-model="address"
          />
        </div>
        <div class="txt-single-contaner">
          <input
            type="text"
            class="txt_field_style"
            placeholder="Postal/Zip code*"
            v-model="zip_code"
          />
        </div>
        <div class="txt-single-contaner">
          <input
            type="text"
            class="txt_field_style"
            placeholder="Country*"
            v-model="country"
          />
        </div>
        <div class="txt-single-contaner">
          <textarea
            name="message"
            class="notes_field_style"
            placeholder="Notes"
            v-model="notes"
            rows="3"
            style="height: auto"
          >
          </textarea>
        </div>
        <div class="txt-single-contaner">
          <p style="font-family: 'MyriadPro-Regular'; margin: 0 10px;">
            This information will be processed in accordance with our
            <a href="https://www.sitecore.com/trust/privacy-policy" style="color: black; text-decoration: under-line;"
              >privacy policy</a
            ><br />
            and used only for the purpose of sending you the Sitecore new-hire
            gift.
          </p>
        </div>
        <div
          class="txt-single-contaner"
          style="justify-content: start !important; padding: 0 10px;"
        >
          <input
            type="button"
            class="btn_style1"
            value="REDEEM NOW"
            style="font-size: 1.5em; letter-spacing: 0.05em;"
            @click="showEditDialog()"
          />
        </div>
      </div>
    </div>
    <template v-else>
      <div class="welcome-msg">
        <div class="welcome_content">
          <h1 class="welcome_header">
            Thank you<br />
            for these details.
          </h1>
          <p class="welcome_sub_content">
            We will now start putting together<br />
            your new-hire gift.
          </p>
          <p class="welcome_sub_content">
            And once again,<br />
            welcome to the Sitecore team!
          </p>
          <p class="welcome_last_content">
            Due to Covid, shipments may take a little longer than usual.
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Router from "@/router/index.js";

const apiToken = "keydSn3PkyRUyOhki";
const airTableApp = "appGXFmlt4gs1VvVA";
const airTableName = "UserInfo";

export default {
  name: "UserInfo",

  data() {
    return {
      user_info: true,
      preferred_name: "",
      surname: "",
      start_date: "",
      email: "",
      phone: "",
      hoodie_size: "",
      address: "",
      zip_code: "",
      country: "",
      notes: "",

      // preferred_name: this.$store.state.g_UserData.Name,
      // surname: this.$store.state.g_UserData.Sur_Name,
      // start_date: this.$store.state.g_UserData.Start_Date,
      // email: this.$store.state.g_UserData.Email,
      // phone: this.$store.state.g_UserData.Mobile_Phone,
      // hoodie_size: this.$store.state.g_UserData.Hoodie_Size,
      // address: this.$store.state.g_UserData.Delivery_Address,
      // zip_code: this.$store.state.g_UserData.Postal_Code,
      // country: this.$store.state.g_UserData.Country,
      // notes: this.$store.state.g_UserData.Notes,

      headers: [
        { text: "Id", value: "id" },
        { text: "User_Code", value: "User_Code" },
        { text: "Name", value: "Name" },
        { text: "Sur Name", value: "sur Name" },
        { text: "Start Date", value: "date" },
        { text: "Email", value: "email" },
        { text: "Mobil Phone", value: "mobile phone" },
        { text: "Hoodie Size", value: "hoodie size" },
        { text: "Delivery Address", value: "delivery address" },
        { text: "Postal Code", value: "postal code" },
        { text: "Country", value: "country" },
        { text: "Notes", value: "notes" },
      ],
      items: [],
      dialog: false,
      editedItem: {},
    };
  },

  created() {
    this.preferred_name = this.$store.state.g_UserData.Name;
    this.surname = this.$store.state.g_UserData.Sur_Name;
    this.start_date = this.$store.state.g_UserData.Start_Date;
    this.email = this.$store.state.g_UserData.Email;
    this.phone = this.$store.state.g_UserData.Mobile_Phone;
    this.hoodie_size = this.$store.state.g_UserData.Hoodie_Size;
    this.address = this.$store.state.g_UserData.Delivery_Address;
    this.zip_code = this.$store.state.g_UserData.Postal_Code;
    this.country = this.$store.state.g_UserData.Country;
    this.notes = this.$store.state.g_UserData.Notes;
  },

  methods: {
    showEditDialog(item) {
      this.editedItem = item || {};
      this.dialog = !this.dialog;
      this.saveItem();
    },
    saveItem() {
      // console.log(this.$store.state.g_User_Code);
      // console.log(this.$store.state.g_Id);

      if (
        !this.preferred_name ||
        !this.surname ||
        !this.start_date ||
        !this.email ||
        !this.phone ||
        !this.hoodie_size ||
        !this.address ||
        !this.zip_code ||
        !this.country
      ) {
        this.user_info = true;
        Router.push({ path: "/user-info" });
      } else {
        let item = {
          Name: this.preferred_name,
          Sur_Name: this.surname,
          Start_Date: this.start_date,
          Email: this.email,
          Mobile_Phone: this.phone,
          Hoodie_Size: this.hoodie_size,
          Delivery_Address: this.address,
          Postal_Code: this.zip_code,
          Country: this.country,
          Notes: this.notes,
        };

        let method = "patch";
        let id = this.$store.state.g_Id;
        let url = `https://api.airtable.com/v0/${airTableApp}/${airTableName}/${id}`;

        // airtable API needs the data to be placed in fields object
        let data = {
          fields: item,
        };

        // if (id) {
        //     // if the item has an id, we're updating an existing item
        //     method = "patch"
        //     url = `https://api.airtable.com/v0/${airTableApp}/${airTableName}/${id}`

        //     // must emove id from the data for airtable patch to work
        //     console.log(data.fields.id);
        //     delete data.fields.id
        //     console.log(data.fields.id);
        // }

        // save the record
        this.axios[method](url, data, {
          headers: {
            Authorization: "Bearer " + apiToken,
            "Content-Type": "application/json",
          },
        }).then((response) => {
          if (response.data && response.data.id) {
            console.log(response.data);
            // add new item to state
            this.editedItem.id = response.data.id;
            if (!id) {
              // add the new item to items state
              this.items.push(this.editedItem);
            }
            this.editedItem = {};
            this.user_info = false;
          }
          this.dialog = !this.dialog;
        });
      }

      // this.axios.post('https://api.airtable.com/v0/appGXFmlt4gs1VvVA/UserInfo', {
      //                                                   preferred_name: this.preferred_name,
      //                                                   surname: this.surname,
      //                                                   start_date: this.start_date,
      //                                                   email: this.email,
      //                                                   phone: this.phone,
      //                                                   hoodie_size: this.hoodie_size,
      //                                                   address: this.address,
      //                                                   zip_code: this.zip_code,
      //                                                   country: this.country,
      //                                                   notes: this.notes}).then((response) => {
      //   console.log(response.data);
      //   this.user_info = false;
      // })
    },
  },
};
</script>

<style>
.user-info--background_img_style {
  background-image: url("../assets/sub_background.png");
  height: 100vh;
  /* filter: brightness(0.7); */
  position: relative;
  background-size: cover;
  background-position: center;
}
.logo_img_style {
  width: 259px;
  height: 56px;
  position: absolute;
  top: 50px;
  left: 60px;
}
.user-info--txt_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
}
.user-info--content_style {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
@media (max-width: 1024px) {
  .user-info--content_style {
    flex-direction: column !important;
  }
}
.user-info--header_style {
  color: white;
  font-family: "AvenirNextLTPro-Bold";
  font-size: 35px;
  font-weight: 700;
  z-index: 2;
}
.user-info--sub_content_style {
  color: white;
  font-family: "AvenirNextLTPro-Regular";
  font-size: 20px;
  padding: 20px 0;
  z-index: 2;
}
.user-info--link_txt_style {
  color: white;
  font-family: "AvenirNextLTPro-Regular";
  font-size: 20px;
  text-decoration: underline;
  z-index: 2;
}
.user-info--user-info-field {
  padding: 1.5em 2.2em;
  background-color: rgb(246, 246, 246);
  margin: 30px;
  z-index: 2;
  font-size: 0.9vw;
}
.txt-double-contaner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.4em 0;
}
.txt-double-contaner .txt_field_style {
  border: none;
  font-family: "MyriadPro-Regular";
  font-size: 1em;
  padding: 10px;
  width: 14vw;
  text-align: left;
  margin: 0 10px;
}
.txt-double-contaner .txt_field_style:focus-visible {
  outline: none;
}
.txt-single-contaner {
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 1.4em 0;
  font-size: 1em;
}
.txt-single-contaner .txt_field_style {
  border: none;
  font-family: "MyriadPro-Regular";
  padding: 10px;
  width: calc(28vw + 20px);
  text-align: left;
  margin: 0 10px;
}
.txt-single-contaner .txt_field_style:focus-visible {
  outline: none;
}
.txt-single-contaner .notes_field_style {
  border: none;
  font-size: 1em;
  padding: 10px;
  width: calc(28vw + 20px);
  text-align: left;
  margin: 0 10px;
  height: 100px;
}
.txt-single-contaner .notes_field_style:focus-visible {
  outline: none;
}
.btn_style1 {
  padding: 10px;
  background-color: rgb(28, 166, 163);
  color: white;
  font-size: 25px;
  font-weight: 700;
  border: none;
}
.welcome-msg {
  width: 100%;
  height: 100%;
  display: flex;
}
.welcome_content {
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  z-index: 1;
  padding: 1em 5em;
  font-size: 1vw;
}
.welcome_header {
  color: rgb(28, 166, 163);
  font-family: "AvenirNextLTPro-Bold";
  font-size: 2em;
}
.welcome_sub_content {
  font-family: "AvenirNextLTPro-Regular";
  font-size: 1.5em;
}
.welcome_last_content {
  font-family: "AvenirNextLTPro-Regular";
  font-size: 1em;
}
</style>
