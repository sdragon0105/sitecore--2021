<template>
  <div class="container user-info--background_img_style">
    <div style="background: black; opacity: 0.5; z-index: 1; height: 100vh; width: 100vw; position: absolute; top: 0; left: 0;"></div>

    <img src="../assets/logo.png" class="logo_img_style" style="z-index:2;"/>

    <div v-if="user_info" class="user-info--content_style">
      <div class="user-info--txt_content">
        <h1 class="user-info--header_style">Order your Sitecore<br>
            new-hire gift</h1>
        <p class="user-info--sub_content_style">Please complete the form to<br>
          receive your new-hire gift.</p>
        <a href="" class="user-info--link_txt_style">Click here to view the<br>
          hoodie conversion chart</a>
      </div>

      <div class="user-info--user-info-field">
        <div class="txt-double-contaner">
          <input type="text" class="txt_field_style" placeholder="Preferred name*" v-model="preferred_name">
          <input type="text" class="txt_field_style" placeholder="Surname*" v-model="surname">
        </div>
        <div class="txt-double-contaner">
          <input type="text" class="txt_field_style" placeholder="Start date*" v-model="start_date">
          <input type="text" class="txt_field_style" placeholder="Email address*" v-model="email">
        </div>
        <div class="txt-double-contaner">
          <input type="text" class="txt_field_style" placeholder="Mobile phone*" v-model="phone">
          <input type="text" class="txt_field_style" placeholder="Hoodie Size*" v-model="hoodie_size">
        </div>
        <div class="txt-single-contaner">
          <input type="text" class="txt_field_style" placeholder="Delivery address*" v-model="address">
        </div>
        <div class="txt-single-contaner">
          <input type="text" class="txt_field_style" placeholder="Postal/Zip code*" v-model="zip_code">
        </div>
        <div class="txt-single-contaner">
          <input type="text" class="txt_field_style" placeholder="Country*" v-model="country">
        </div>
        <div class="txt-single-contaner">
          <textarea name="message" class="notes_field_style" placeholder="Notes*" v-model="notes">
          </textarea>
        </div>
        <div class="txt-single-contaner">
          <p style="font-family: 'MyriadPro-Regular';">This information will be processed in accordance with our privacy policy<br>
            and used only for the purpose of sending you the Sitecore new-hire gift.</p>
        </div>
        <div class="txt-single-contaner" style="justify-content: start !important; padding: 0 20px;">
          <input type="button" class="btn_style1" value="REDEEM NOW" @click="user_info_click">
        </div>
      </div>
    </div>
    <template v-else>
      <div class="welcome-msg">
        <div class="welcome_content">
          <h1 class="welcome_header">Thank you<br>
              for these details.</h1>
          <p class="welcome_sub_content">We will now start putting together<br>
              your new-hire gift.</p>
          <p class="welcome_sub_content">And once again,<br>
            welcome to the Sitecore team!</p>
          <p class="welcome_last_content">Due to Covid, shipments may take a little longer than usual.</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>

export default {
  name: "UserInfo",

  data() {
    return {
      user_info: true,
      preferred_name: "",
      surname: "",
      start_date:"",
      email: "",
      phone: "",
      hoodie_size: "",
      address: "",
      zip_code: "",
      country: "",
      notes:""
    };
  },

  methods: {
    user_info_click() {
      this.axios.post('http://localhost:3000/signup', { preferred_name: this.preferred_name,
                                                        surname: this.surname,
                                                        start_date: this.start_date,
                                                        email: this.email,
                                                        phone: this.phone,
                                                        hoodie_size: this.hoodie_size,
                                                        address: this.address,
                                                        zip_code: this.zip_code,
                                                        country: this.country,
                                                        notes: this.notes}).then((response) => {
        console.log(response.data);
        this.user_info = false;
      })
    }
  },


};
</script>

<style>
.user-info--background_img_style {
  background-image: url("../assets/sub_background.jpeg");
  height: 100vh;
  /* filter: brightness(0.7); */
  position: relative;
  background-size: cover;
  background-position: center;
}
.logo_img_style {
  width: 210px;
  height: 70px;
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
  font-family: 'AvenirNextLTPro-Bold';
  font-size: 35px;
  font-weight: 700;
  z-index:2;
}
.user-info--sub_content_style {
  color: white;
  font-family: 'AvenirNextLTPro-Regular';
  font-size: 20px;
  padding: 20px 0;
  z-index:2;
}
.user-info--link_txt_style {
  color: white;
  font-family: 'AvenirNextLTPro-Regular';
  font-size: 20px;
  text-decoration: underline;
  z-index:2;
}
.user-info--user-info-field {
  padding: 20px 35px;
  background-color: rgb(246,246,246);
  margin: 30px;
  z-index:2;
}
.txt-double-contaner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
.txt-double-contaner .txt_field_style {
    border: none;
    font-family: 'MyriadPro-Regular';
    font-size: 16px;
    padding: 10px;
    width: 250px;
    text-align: left;
    margin: 0 10px;
}
.txt-double-contaner .txt_field_style:focus-visible {
  outline: none;
}
.txt-single-contaner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
.txt-single-contaner .txt_field_style {
    border: none;
    font-family: 'MyriadPro-Regular';
    font-size: 16px;
    padding: 10px;
    width: 520px;
    text-align: left;
    margin: 0 10px;
}
.txt-single-contaner .txt_field_style:focus-visible {
  outline: none;
}
.txt-single-contaner .notes_field_style {
    border: none;
    font-size: 16px;
    padding: 10px;
    width: 520px;
    text-align: left;
    margin: 0 10px;
    height: 100px;
}
.txt-single-contaner .notes_field_style:focus-visible {
  outline: none;
}
.btn_style1 {
    padding: 10px;
    background-color: rgb(28,166,163);
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
  background-color: rgba(255, 255, 255, .8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  z-index: 1;
  padding: 30px 60px;
}
.welcome_header {
  color: rgb(28,166,163);
  font-family: 'AvenirNextLTPro-Bold';
}
.welcome_sub_content {
  font-family: 'AvenirNextLTPro-Regular';
  font-size: 30px;
}
.welcome_last_content {
  font-family: 'AvenirNextLTPro-Regular';
  font-size: 20px;
}
</style>