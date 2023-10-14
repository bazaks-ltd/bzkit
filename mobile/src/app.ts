import { createApp } from "nativescript-vue";
import App from "./app.vue";
import { Application, isIOS } from "@nativescript/core";

const app = createApp(App);
if (isIOS) {
  @NativeClass()
  class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationDidFinishLaunchingWithOptions(
      application: UIApplication,
      launchOptions: NSDictionary<string, any>
    ): boolean {
      console.log(
        "applicationWillFinishLaunchingWithOptions: " + launchOptions
      );

      IQKeyboardManager.sharedManager().enable = true;

      return true;
    }

    applicationDidBecomeActive(application: UIApplication): void {
      console.log("applicationDidBecomeActive: " + application);
    }
  }
  Application.ios.delegate = MyDelegate;
}
app.start();
