import React, { useState, useRef } from "react";
import { WebView } from "react-native-webview";
import { View } from "react-native";

export default function App() {
  const [showWebView, setShowWebView] = useState(false);
  const popupRef = useRef(null);
  const uri = "https://app.awari.com.br";

  const jsCode = `
		document.getElementsByClassName('sc-cRkqwB')[0].style.display = 'none';
    document.body.style.overflowX = 'hidden';
  `;

  return (
    <View style={{ flex: 1, paddingTop: "10%" }}>
      <WebView
        ref={popupRef}
        source={{ uri: uri }}
        style={showWebView ? { flex: 1 } : { flex: 0 }}
        javaScriptEnabled
        injectedJavaScript={jsCode}
        startInLoadingState={true}
        scalesPageToFit={false}
        onLoadStart={() => {
          setShowWebView(false);
        }}
        onLoadEnd={() => {
          if (!showWebView) {
            setShowWebView(true);
          }
        }}
      />
    </View>
  );
}
