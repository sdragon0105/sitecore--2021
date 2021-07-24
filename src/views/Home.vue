<template>
  <div class="container background_img_style">
    <div style="background: black; opacity: 0.5; z-index: 1; height: 100vh; width: 100vw; position: absolute; top: 0; left: 0;"></div>
    <div>
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="warning"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
         style="z-index: 2;"
      >
        Your unique code is {{ generate_num }}.
      </b-alert>
      <!-- <b-button @click="showAlert" variant="info" class="m-1">
        Show alert with count-down timer
      </b-button> -->
    </div>
    <!-- <img src="../assets/main_background.jpeg" class="background_img_style"> -->
    <img src="../assets/logo.png" class="logo_img_style" style="z-index: 2"/>
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
        <div
          v-if="generate_btn"
          style="width: 250px; display: flex; justify-content: center"
        >
          <button
            type="button"
            class="btn btn-success btn-lg"
            @click="showAlert"
            variant="info"
          >
            Generate
          </button>
        </div>
        <template v-else>
          <div class="text_btn_style">
            <input type="text" class="txt_style" maxlength="6" />
            <div class="btn_style" @click="match">
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
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Router from '@/router/index.js'

export default {
  name: "Home",

  data() {
    return {
      generate_btn: true,
      dismissSecs: 5,
      dismissCountDown: 0,
      generate_num: 0,
    };
  },

  methods: {
    //  countDownChanged(dismissCountDown) {
    //    this.dismissCountDown = dismissCountDown;
    //  },
    showAlert() {
      //   this.dismissCountDown = this.dismissSecs;
      this.generate_btn = false;
      this.generate_num = Number.parseInt(Math.random() * 1000000);
      this.dismissCountDown = this.generate_num;

    },
    match() {
      if (this.generate_num == document.querySelector(".txt_style").value)
      {
        Router.push({ path: "/user-info" });
      }
      else {
        // this.generate_btn = false;
        Router.push({ path: "/" });
      }
    },
  },

  //   async mounted() {
  //     try {
  //       await this.initialLoad();
  //       this.loading = false;
  //     } catch (error) {
  //       this.loading = false;
  //       this.error = true;
  //     }
  //   },
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
  font-family: 'AvenirNextLTPro-Bold';
  font-size: 86px;
  max-width: 750px;
  line-height: 100%;
  z-index: 2;
}
.content_style {
  width: 600px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  z-index: 2;
}
@media (max-width: 600px) {
  .content_style {
    width: 100% !important;
  }
}
.subtext_style {
  color: white;
  font-family: 'AvenirNextLTPro-Regular';
  font-size: 19px;
  line-height: normal;
  max-width: 650px;
  min-width: 600px;
  z-index: 2;
}
.label_style {
  color: white;
  font-family: 'AvenirNextLTPro-Bold';
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  z-index: 2;
}
.unique_code_style {
  display: flex;
  flex-direction: row;
  z-index: 2;
}
.text_btn_style {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 260px;
  height: 80px;
  margin: 0 15px;
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
  font-family: 'AvenirNextLTPro-Regular';
  font-size: 40px;
  max-width: 150px;
  border: none;
}
.txt_style:focus-visible {
  outline: none;
}
</style>
