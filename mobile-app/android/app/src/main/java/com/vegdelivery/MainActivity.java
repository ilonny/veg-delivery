package com.vegdelivery;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // Import this.
import android.os.Bundle;
import android.os.Build;
import com.vegdelivery.CustomClientFactory;  // replace <app-name>
import com.facebook.react.modules.network.OkHttpClientProvider;
import okhttp3.OkHttpClient;
public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        OkHttpClientProvider.setOkHttpClientFactory(new CustomClientFactory());
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "VegDelivery";
  }
}
