import { shallowMount } from "@vue/test-utils";
import Transition from "@/components/Transition.vue";

describe("Transition.vue", () => {
  it("Transition.vue loaded", () => {
    const wrapper = shallowMount(Transition, {});
    expect(wrapper.exists()).toBe(true);
  });
});
