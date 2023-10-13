import { reactive, ref, watch } from "nativescript-vue";
import { colors, shark } from "../../colors.cjs";
import {
  LoadingIndicator,
  Mode,
  OptionsCommon,
} from "@nstudio/nativescript-loading-indicator";
export function useLoader() {
  const isLoading = ref(true);
  const message = ref("Loading...");
  const details = ref("Additional detail note!");

  const indicator = new LoadingIndicator();

  const options: OptionsCommon = reactive({
    message: message.value,
    details: details.value,
    // progress: 0.65,
    // margin: 10,
    dimBackground: true,
    color: colors.primary, // color of indicator and labels
    // background box around indicator
    // hideBezel will override this if true
    backgroundColor: colors["base-100"],
    userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
    mode: Mode.Indeterminate, // see options below
  });

  watch(isLoading, () => {
    console.log("laoder: ", isLoading.value);
    if (isLoading.value) {
      indicator.show(options);
    } else {
      indicator.hide();
    }
  });
  return { isLoading, message, details };
}
