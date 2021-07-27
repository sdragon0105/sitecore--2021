<template>
  <div class="container background_img_style" style="overflow: hidden;">
    <div
      style="background: black; opacity: 0.4; z-index: 1; height: 100vh; width: 100vw; position: absolute; top: 0; left: 0;"
    ></div>
    <!-- <img src="../assets/main_background.jpeg" class="background_img_style"> -->
    <a href="/"><img src="../assets/logo.png" class="logo_img_style" style="z-index: 2" /></a>
    <div class="content_style">
      <h2 class="header_style">Welcome to the Sitecore Team</h2>
      <p class="subtext_style">
        We’re thrilled to have you on board. Together as one team,<br />
        we are poised for greatness, through accelerated growth<br />
        and boundless opportunities.<br /><br />
        We are excited for our journey together and for your career<br />
        here at Sitecore!<br /><br />
        We would like to celebrate by sending you a welcome gift,<br />
        to make your experience extra special. Please provide us<br />
        with your details and we will take care of the rest.<br /><br />
        Warmly,<br />
        Your Sitecore Team
      </p>
      <div class="unique_code_style">
        <p class="label_style">
          ENTER YOUR UNIQUE CODE<br />
          TO RECEIVE YOUR SITECORE<br />
          NEW-HIRE GIFT<br />
        </p>

        <div class="text_btn_style">
          <input type="text" class="txt_style" maxlength="5" v-model="User_code"/>
          <div class="btn_style" @click="loadItems">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Router from "@/router/index.js";

const apiToken = "keydSn3PkyRUyOhki";
const airTableApp = "appGXFmlt4gs1VvVA";
const airTableName = "UserInfo";

export default {
  name: "Home",

  data() {
    return {

      headers: [
            { text: 'Id', value: 'id' },
            { text: 'User_Code', value: 'User_Code' },
            { text: 'Name', value: 'Name' },
            { text: 'Sur Name', value: 'sur Name' },
            { text: 'Start Date', value: 'date' },
            { text: 'Email', value: 'email' },
            { text: 'Mobil Phone', value: 'mobile phone' },
            { text: 'Hoodie Size', value: 'hoodie size' },
            { text: 'Delivery Address', value: 'delivery address' },
            { text: 'Postal code', value: 'postal code' },
            { text: 'Country', value: 'country' },
            { text: 'Notes', value: 'notes' },
        ],
      items: [],
    };
  },

  methods: {

    loadItems() {
      if(!this.User_code)
      {
        this.User_code = "";
        Router.push({ path: "/" });
      } else {
        this.items = [];
        this.axios
          .get(`https://api.airtable.com/v0/${airTableApp}/${airTableName}`, {
            headers: { Authorization: "Bearer " + apiToken }
          })
          .then((response) => {
            this.items = response.data.records.map((item) => {
              return {
                id: item.id,
                ...item.fields,
              };
            });
            for(let i=0; i<this.items.length; i++){
              if(this.items[i].User_Code == this.User_code){
                this.$store.commit('setUserData', this.items[i]);
                console.log(this.$store.state.g_UserData);
                this.$store.commit('setCode', this.items[i].User_Code);
                this.$store.commit('setId', this.items[i].id);
                Router.push({ path: "/user-info" });
                //  console.log( this.$User_Code_G);
                //   console.log(this.$Id_G);
              }
            }
          })
          .catch((error) => {
            console.log(error);
            this.User_code = "";
            Router.push({ path: "/" });
          });
      }
    },
  },
};
</script>

<style>
.background_img_style {
  background-image: url("../assets/main_background.png");
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
.header_style {
  color: white;
  font-family: "AvenirNextLTPro-Bold";
  font-size: 3.5em;
  max-width: 100%;
  line-height: 100%;
  z-index: 2;
}
.content_style {
  width: 40%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  z-index: 2;
  font-size: 1.3vw;
}

.subtext_style {
  color: white;
  font-family: "AvenirNextLTPro-Regular";
  font-size: 0.9em;
  line-height: normal;
  max-width: 100%;
  z-index: 2;
}
.label_style {
  color: white;
  font-family: "AvenirNextLTPro-Bold";
  font-size: 1em;
  font-weight: 700;
  line-height: normal;
  z-index: 2;
}
.unique_code_style {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;
}
.text_btn_style {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 50%;
  height: 100%;
  max-width: 300px;
}
.btn_style {
  background-color: rgb(28, 166, 163);
  padding: 5px;
  border-radius: 100%;
  cursor: pointer;
}
.txt_style {
  height: 70px;
  text-align: center;
  font-family: "AvenirNextLTPro-Regular";
  font-size: 47px;
  max-width: 210px;
  border: none;
  padding-top: 11px;
}
.txt_style:focus-visible {
  outline: none;
}
@media only screen and (max-width: 1200px) {
  .content_style {
    width: 50% !important;
  }
}
@media only screen and (max-width: 1024px) {
  .unique_code_style {
    flex-direction: column;
  }
}
</style>
