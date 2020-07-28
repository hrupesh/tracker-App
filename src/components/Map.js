import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";

export default function Map() {
  let points = [];
  // for (let i = 0; i < 20; i++) {
  //   // if (i % 2 === 0) {
  //   //   points.push({
  //   //     latitude: 20.0382773 + i * 0.0001,
  //   //     longitude: 73.8064166 + i * 0.0001,
  //   //   });
  //   // } else {
  //   //   points.push({
  //   //     latitude: 20.0382773 - i * 0.0001,
  //   //     longitude: 73.8064166 + i * 0.0001,
  //   //   });
  //   }
  // }

  const pos = {
    latitude: 20.0382168,
    longitude: 73.8064859,
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 20.0382168,
        longitude: 73.8064859,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
    >
      <Polyline coordinates={points} strokeColor="#212121" strokeWidth={5} />
      {/* {points.map((point) => ( */}
      <Marker
        coordinate={pos}
        title="Location"
        description="Desc"
        style={{ height: 50, width: 50 }}
        image={{
          uri:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAEZCAMAAAAJ5v+EAAAAwFBMVEXnTDz////AOSvnSjrmQC3mPirnSDfnSzrmRTTmRDLmQjDlSzvFOy3COizANyn+9fTmOybeSDjTQjPSQjP75OK+MSHqZVi9KBTwk4vpW0352NX1uLPLPjD63dr3xcH3ysa+Lh3sdWr97uzug3nrbF/xnJTzrKboVkf40M3uhXvDQjW9JQ/w09DtfHHypJ30sqzvjYTRdm7ovbnIVUnZkYvUgHjiq6fen5rKXlTsx8T2vrnblpDKX1XGTD/PbmXTfnb9rKo+AAANrUlEQVR4nNWde1PjvA6Hk20ubUqTFtKGFsqGcCl3drksLLvwfv9vdZJCoU0tW7LldM9vzj/nndnyjEdWZFmSHZdRSTE9uL3ZPTocjWezrjObjUfH1z9OTg8mRcL5dxym3ynOTs9Hs7bnRZ120GqFYeg4Thi2WkG7HZX/1Rlf3xykTH+MA3p6ez72/KiErUiFKvGDkt05vDljWHNT6HTvKPK9Noy7opLc949Pp5uETm9GHa+N4/1a9CCKxrtnm4EuTkdeFBCJFyve8We7k6ahk4PDfhRoAX9y98enRYPQxcnMMyL+4I6Cc63l1oCenneiljlypbDtHX9vAPrssE/delIF/uzFMvTkmsMuVtXyRkRsEnR67bW5kSsF3ojkAgnQyYnPahgr2P1DwhcHD73nRLaQK7WjE/QHHgudHvpMHgNSGI2xjgQJfepbMeZVtfrnuK8NCjo99mxaxpc6zgEX9F6H3c1Bavm7LNDJdb+ZZX5XNFa7ESX0dNZpELlUECk/NSrol+ZMY6FQaSIK6N1GTWMhbyR32VLo5NrbAHKp9lh6BpZBF8fRZphLw3ZkwYgEOnUa+KBAavUlHhuGnjqNb8Flhf4eHXoSbpS5oj6lQp/Zjo8Q1H2IGoCetDfOXMq/pUBv2J4XguxaCJ0G/wRzZSHCT7oIuhj/I8zVyUDkr0XQxw2HSDK1HMG3UQB9tLHvoEjBbD0OWYe+8TfNuar2oRr6wDeL67qDwfbO/v7WXPv7+9uDQdeM2luLVOvQaaDvoLuD7f3eN4F6Wzsm5GuOrw6t7ThKYBHvl0pwzZ8O/akUeldvE3a3t+TEHyuuyR3UDgWr0Adam3CgWOOV9d7WsZNoF4YuHA2D3haasUQ7GtjeAQh9SI/6yciV9snYrSABoF/6jSBrrXbnXAxNNo4BaveJ1aNuSf+7EPqcFnJ0d/SRKxFtJBgnAujvtHTBQNcyvrRN+oNLHuQLmvZZ2TZG/kZc7NBP16D3SC6a4Jll2qJYdvuoDp1QdiGDaSxEMZHPvbiAPiF8vwdsyKV28H83GK1CFyE+IGVlJlEvvosf0Lt4d8eyBZe1j/7TrdkydIGP/A29s0hbaGr/ZQkav9Ds61wJvdYfVj2HLtC1Jsz2vBDart8dyBz6Bus6LDHjqYPDBXQyQ/poa8xofx1Gkw/oF2TU0UVGdXEcD4d5qeFwGMdIauS3sX3+AX2MjDow3+6SN8t692+PD3/+PDz+/HuRZzkKHOlCQi+ZQ6fI2B/hOOI8u3i8S5dOGUn6+899ng3V/xbpQrzbOfQJzt91lcTDy9cn4XVr8etvud6qf48z68rrOehtqDLoYfZ2JSJ+V/owVGLjAlV/UkKf4WJShXHEUuT5cj/kCiPBGUjnpIT+gTqCy40jzl5/y5Hnq/12KV9slAcpAxAHGUhLPUecP6mRK91dSBe7hyFxvIlzhnLS0s/KsKewjCUb+ZvJFhu1Fzsnzi7KOmS7MHujlET/kZoIZi+GY2eMiZVkC509EpBL/ZJRo2KQ0EHFd5KFpjKXhi3zfYYJ+CVJFprOXFJL1ppw+FIIdh35TzpzZSHwKnAxwz56eK/D7LoPOfiTutcFdYEfwzjWbQL5C/pr/IFRLig1E2d3msxu0QPNmmepwW2Y/6fLXG1G6Fd5tiKUNIgzkz6bZ8hAeOwDso7slwGzmw4hA+GwD8g64lcTZtd9hDwILW0tFuQ7zBa6XGoodMKnyWABn/D41bRz7BGyagZo4JexITSsK8iBmBs1ZNKX5s2FF4B9mBs1YNLDZ2Nm9wnYiuZGDXhp021YaQrEqOaeWrwP49y0EbLSK2AfxkE1AG3opN/1H+A/THdiV/w9HGrF0XXdZZagxT9r7vAqQU7P1H0AHk8/KF1WAexES9CXHPsQ9NSm0akYOs41u2NrehZDmzpq8bcljnmg38TuwxJ0j2e2wc9GoS9YmKFAzxb0/+NKxzzQzdr0kGcjAukPU2jo48IzquPejsuDoBG3FWolwA2jnY/Lt5whnC7PtpZiDyBgGmpkeNdlLcoTh6axZrp0VVDy1PhkCxwChhw7EdiH5icXIKHOEZsWQGasZwwNncYNMqYLQSZtfhoH3IdZyvRdUGbdPNkL3V2Y2wfk8DjSpkAub/hmCg3lajiu5aCc+iX6blmsBMqKcWTVoWSe6VI/AduQ5f4C+LyU50SjpQYXmuemCLr61L1EfBd4lYirn1AJvN0ySUJOwatmjosA2D4M7j5lt59MV7bg1bh+kvoPtAuZrENWhJBrRqh3cH0Nx93WXHC5x6WWWaeSig+2gg+4vE3rerwAvR12G6Iqa+BuizgnnxaLV0nJGG4bomqYJJWE5LVOZWVuqIUOnRNMtRjo9Spqml1fxbLSPMxCt8bIujxZ0WacEe4yfknr8lAL3bnBVkBKy2Pze+RXJvkpZca5Dm/iuEeoakJ5Zf0we8Aw3/Xg2qVKqPiuqjXFVvXKy9Tj/JtyP149K+pjcYH0vKrXxdVPq2q+4+xVin31pixXx7k7fzqvVMc1jChbL+Ls4gGw7eLXcwZW0iyE+668V6qjewLUfQxxfvn68LuWBU6unjDF9dhI6aMnwB3hui9QHSNxnvXufz7d/b66ml79vnt6fL7IcuUiV8IZR+gntD4XZG9OHA/zLLuc/y8fooC/oaO7zz4Xd7z5jiLkeSWMpgvoU2zvloW+vndh0wZfvVtugu6SY2oIXmPGRtFLXXKEDlsr1Og06XI/IqXz02CUgDHzaucnofUT2ypHYEafv1d7bEndzMwWgrbntW5mUt84qw8hMAfH7io0aU4GY3cwZRzCWoe+e0oZOsE2V4CS5Whfu3VoZIT6oS6LYZMmk4RRsQ59QJvvwWDYtLEk0Y27Du1e08bsmAx/mS8zLQEWjF0RdEp9XsFosakTgvwDIbR7Sh0dpW/ZpGkklb52YQ0aexpYkp6NEC3DqTqvCwh6ojHqnY69pZHNXdqFdWj3h84gRcpoMQ3DqNQaJzB0EWpNy0MOcdMfP+evDu6tjZ4jfReXNVBz6w/Mez+vgNCuzhy3D3UHOyB4b3/b4AKoLx/yR/0urqkaALnV+wpNelv7O9uGUyCjH/WVrf1/nfFz6+p2u4NSXZYLlJZTLwJcg5429I4BXt7acOT1uaaaYyCt6XNklAw6sfb+iZ766894CMbears9KxIMkBUOGP53hiIv8mAI6O//0LTeSPQ6g3BoNvE4YFHr7g6ETjfyeIRI4vnk4pnq/4rbWz5jKaG1RslakC9+tQgYuU+bCGlLX1MfUdAaJy9+hRFwWQa+yEAegcuv6ASAA9++2LzbWx0qjIJONx6CeOAzI/DTKJTkrw0Jojs1NGk8qwX14UcqJS/nvGzU7bXPYTLZG0WbjPbCvqTRSgaNqxSyI9DdqaDd8425vZbgxQskdGr1GUeZfOnTbPIXzm42ZCCf91g60CYJJxPVU0o0aGwpCK+g6A4JjZ55yqkwUPSVqqAnG0g4eTcKKOWjjsTXAxgkd3co6KLxpZY9fYeExs95ZpLC3eGg0YOeeRR6DA+V6r5Mo6tOPYOuB+0eNuj2WiGijR4DPW3wkLueQdeE1rte1NKiSokBurmEk8f2NnNzeXZRBl0buqGTV+jheguQ0N8b2YvCDLo+dCPRXhgh27qx0NMGTl4e8C6pNnQDeXZJSkkX2r7bAzLoJtDureUQZKVKiQvasttbeqGKE5r4mhhRWHdHhLaaZ285hCkWFOi0Y8/twRl0Q2iLeXa8uyNDJ9bexu7LXp83g3ZvLe1FgrujQ1u6XgzbtPkERGhkxyVR0gy6OTSyuZUmdUrJEDo1fLpZJOD9dj5oC26P5u60oNkTTuLH23mh2asqZBeGbNDMJy+qu9OEnrAecpUZdB5oVrfX0gHQ+Tfk3hKJ5BeGjNCM14v1GnSL0Am2/Vml0IPrI7ihNR75FguTQWeDZnJ7S41vTUDzXC+iMuh80Cx59mCsOZJRF7pomS+1j8qgM0Iz5Nn13J0RNK29VSRFfYQVaNM2HkpKiQ3a8HpRXINuHXpqdPLysRl0XmijPDv9jMUEnRhcaQhabpqBNnB7yAtDG9DaCaewY/Tghxm0bhuPgbszh9bMs5My6PzQ2GlZqyKnlHihtdwe0HLTHLTO9SL+wtAStEbCSVWU2QA02e2BLTdNQlPbeKgZdCvQRLcHt9w0Ck27XiRdGNqDJuXZjaK7hTigKXl2n5xBF4gDmuD2zN1dJRZodFWFtOUGLx7oCTKwjjQy6ALxQCPz7OQLQ0BM0Lg2Hq0MukBM0Kh6dkQNOk5c0Jg2HkmHIfFvMf0Ooo2Hx91VYoNW5tmVLTd48UGr8uw6F4aA+KAV3Yu4GnScGKHlbTzqlhu8GKGlbo/N3VXihJZEe5oXhoA4oSVtPJoXhoBYocE8O6rlBi9eaKiNR/fCEBAvNHC9yOnuKjFDixNOuJYbvJihhXl2swy6QNzQgpOXcGiVkdih19t4DDPoArFDr0V76JYbvPihp7WEE7rlBi9+6FqenSWlVJMF6FW3Z5xBF8gC9EobD7EGHScb0Etuj9Jyg5cV6K/rRX53V8kK9GeenSulVJMd6EWe3YK7q2QH+sPt2XB3lSxBJ0Hl9mgtN3hZgnb3PEvurpItaHcUhB0b7q6SNegz3zO/MARkDdo9MqyPkMgedMqUQRfofye7Ku7s9JG8AAAAAElFTkSuQmCC",
        }}
      />
      {/* ))} */}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 400,
  },
});
