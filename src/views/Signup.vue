<template>
  <main
    class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800"
  >
    <div class="flex flex-col gap-2 justify-center mx-auto">
      <img
        class="w-auto h-20"
        :src="require('../../public/atom.svg')"
        alt="logo"
      />
      <p class="text-gray-600">Welcome!</p>
    </div>

    <form class="mt-6" @submit.prevent="submitHandler" autocomplete="off">
      <div>
        <label
          for="email"
          class="block text-sm text-start text-gray-800 dark:text-gray-200"
          >Email</label
        >
        <input
          v-model="email"
          type="email"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-yellow-400 dark:focus:border-yellow-300 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div class="mt-4">
        <div class="flex items-center flext-start">
          <label
            for="password"
            class="block text-sm text-gray-800 dark:text-gray-200"
            >Password</label
          >
        </div>

        <input
          v-model="password"
          type="password"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-yellow-400 dark:focus:border-yellow-300 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div class="mt-6">
        <button
          type="submit"
          class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
        >
          Sign Up
        </button>
      </div>
    </form>

    <div class="flex items-center justify-between mt-4">
      <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

      <a
        class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
      >
        or sign up with
      </a>

      <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
    </div>

    <div class="flex items-center mt-6 -mx-2">
      <button
        @click="signInWithGoogle"
        type="button"
        class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none"
      >
        <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
          <path
            d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
          ></path>
        </svg>

        <span class="hidden mx-2 sm:inline">Sign up with Google</span>
      </button>
    </div>

    <p class="mt-8 text-xs font-light text-center text-gray-400">
      Already have an account?
      <router-link
        to="/login"
        class="font-medium text-gray-700 dark:text-gray-200 hover:underline"
        >Login</router-link
      >
    </p>
  </main>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "SignupView",
  components: {},
  setup() {
    const store = useStore();

    const email = ref("");
    const password = ref("");

    const submitHandler = async () => {
      if (email.value !== "" && password.value !== "") {
        const response = await store.dispatch("auth/signup", {
          email: email.value,
          password: password.value,
        });
        return response;
      }
    };
    const signInWithGoogle = async () => {
      const response = await store.dispatch("auth/googleSignin");
      return response;
    };
    return {
      email,
      password,
      signInWithGoogle,
      submitHandler,
    };
  },
});
</script>
