package com.photobook; // replace com.your-app-name with your app’s name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.facebook.react.bridge.Promise;
import android.provider.Settings.Secure;
import android.provider.Settings;
public class DeviceInfosModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext context;
    DeviceInfosModule(ReactApplicationContext context) {
        super(context);
        this.context = context;
    }

    @Override
    public String getName() {
        return "DeviceInfosModule";
    }

    @ReactMethod
    public void getUniqueId(String name, Promise promise) {
        if(("zut").equals(name)){
            promise.reject("42", "et paf !");
            return;
        }
        String m_android = Secure.getString(context.getContentResolver(), Settings.Secure.ANDROID_ID);
        promise.resolve("contexte " + m_android);
    }
}