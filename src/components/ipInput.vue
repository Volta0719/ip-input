<!--
 * @Author: 24min
 * @Date: 2021-12-04 20:06:28
 * @LastEditors: fanjf
 * @LastEditTime: 2023-07-31 10:15:14
 * @FilePath: \ip-input\src\components\ipInput.vue
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
-->
<template>
  <ul class="fan-ip-addr" @paste="pasteIP($event)">
    <li v-for="(item, index) in ip" :key="index" class="fan-ip-item">
      <a-input size="small" v-model.number="item.value" class="fan-ip-input" ref="ipInput" :maxLength="3"
        @focus.native="focusInput($event, index)" @blur.native="blurInput($event, index)"
        @keyup.native="pressKey($event, index, item)" @keydown.native="keydown($event, index)"
        @compositionstart="compositionstart($event, index)" @compositionend="compositionend($event, index)"
        @change="changeIp($event, index)"></a-input>
      <span class="fan-ip-dot" v-if="index < 3"></span>
    </li>
  </ul>
</template>

<script>
import { Input } from "ant-design-vue";
const ipRegex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
export default {
  name: "fanIpInput",
  data() {
    return {
      blurIndex: 0, //record the last blur input
      isCodeFoucus: false, // is the code to foucs the input
      // shouldLockKeyupEvent: false,
      shouldRemoveText: "",
      ip: [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
      firstFlag: [
        { start: true, end: true },
        { start: true, end: true },
        { start: true, end: true },
        { start: true, end: true },
      ],
      prenentKeycode: "", //Record a Keyboard key[code] When In chinese input method,the Peroid trigger twice pressKey() method
      beforePosition: 0,
    };
  },
  components: {
    aInput: Input,
  },
  props: {
    value: {
      type: String,
      default: "0.0.0.0",
    },
  },
  model: {
    prop: "value",
    event: "result",
  },
  watch: {
    value: {
      immediate: true,
      handler: function (newIp, oldIp) {
        this.ip = [];
        newIp.split(".").forEach((ele) => {
          this.ip.push({ value: ele });
        });
      },
    },
  },
  methods: {
    pasteIP(e) {
      const pasteData = e.clipboardData.getData("Text");
      const resultIP = pasteData.match(ipRegex);
      if (!!resultIP) {
        this.ip = [];
        resultIP[0].split(".").forEach((ele => {
          this.ip.push({ value: ele });
        }))
      } else {
        console.log(`[fan-ip-input]we did't found an ip in your paste Data("${pasteData}") `)
      }
    },
    changeIp(e, index) {
      // console.log("changeIp", e);
      if (this.shouldRemoveText) {
        const { value } = e.currentTarget;
        const iindex = value.indexOf(this.shouldRemoveText);
        if (iindex >= 0) {
          this.ip[index].value = value.replace(
            new RegExp(this.shouldRemoveText, "g"),
            ""
          );
          // this.shouldLockKeyupEvent = false;
          this.shouldRemoveText = "";
          this.$nextTick(() => {
            let currentEvent = this.$refs.ipInput[index].$el;
            currentEvent.selectionStart = this.beforePosition;
            currentEvent.selectionEnd = this.beforePosition;
          });
        } else {
          console.error(`[fan-ip-input]we didn't match the text[${this.shouldRemoveText}] in ${index} value😅`);
        }
      } else {
        if (e.currentTarget.selectionStart === 3) {
          this.isCodeFoucus = true;
          this.firstFlag[index === 3 ? 0 : index + 1].start = false;
          this.$refs.ipInput[index === 3 ? 0 : index + 1].focus();
        }
        if (e.currentTarget.selectionStart !== 0) {
          //https://github.com/Volta0719/ip-input/issues/1
          this.firstFlag[index].start = true;
        }
        const resultIp = this.ip.map((ip) => ip.value).join(".");
        this.$emit("result", resultIp);
      }
    },
    // clickIP(e, index) {
    //   console.log("index", e.currentTarget.selectionStart);
    //   // if (this.ip[index].value.length === e.currentTarget.selectionStart) {
    //   //   this.firstFlag[index].end = false;
    //   // } else {
    //   //   this.firstFlag[index].end = true;
    //   // }
    //   // if (e.currentTarget.selectionStart == 0) {
    //   //   this.firstFlag[index].start = false;
    //   // } else {
    //   //   this.firstFlag[index].start = true;
    //   // }
    // },
    focusInput(e, index) {
      if (this.isCodeFoucus) {
        if (index > this.blurIndex) {
          if (index === 3 && this.blurIndex === 0) {
            e.currentTarget.selectionStart =
              this.ip[index].value.toString().length;
            e.currentTarget.selectionEnd =
              this.ip[index].value.toString().length;
          } else {
            e.currentTarget.selectionStart = 0;
            e.currentTarget.selectionEnd = 0;
          }
        } else {
          if (index === 0 && this.blurIndex === 3) {
            e.currentTarget.selectionStart = 0;
            e.currentTarget.selectionEnd = 0;
          } else {
            e.currentTarget.selectionStart =
              this.ip[index].value.toString().length;
            e.currentTarget.selectionEnd =
              this.ip[index].value.toString().length;
          }
        }
        this.isCodeFoucus = false;
      } else {
        setTimeout(() => {
          let currentEvent = this.$refs.ipInput[index].$el;
          if (
            this.ip[index].value.toString().length ===
            currentEvent.selectionStart
          ) {
            this.firstFlag[index].end = false;
          }
          if (currentEvent.selectionStart == 0) {
            this.firstFlag[index].start = false;
          }
        }, 0);
      }
    },
    blurInput(e, index) {
      const { value } = e.currentTarget;
      if (+value > 255) {
        this.ip[index].value = 255;
      }
      this.blurIndex = index;
      this.firstFlag[index].end = true;
      this.firstFlag[index].start = true;
    },
    keydown(e, index) {
      const allowKey = [
        "Backspace",
        // "Period",
        "ArrowRight",
        "ArrowLeft",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
      ];
      this.prenentKeycode = e.key === "Process" ? e.code : "";
      //将ctrl-v 放行
      if (!allowKey.includes(e.key) && !(e.code === 'KeyV' && e.ctrlKey)) {
        e.preventDefault();
      }
    },
    compositionstart(e, index) {
      // console.log("compositionstart", e);
      this.beforePosition = e.currentTarget.selectionStart;
      this.shouldLockKeyupEvent = true;
    },
    compositionend(e, index) {
      // console.log("compositionend", e);
      let len = this.ip[index].value.toString().length;
      this.shouldRemoveText = e.data.substring(0, 3 - len);
      // console.log("this.shouldRemoveText", this.shouldRemoveText);
      if (!this.shouldRemoveText) {
        e.currentTarget.selectionStart = this.beforePosition;
        e.currentTarget.selectionEnd = this.beforePosition;
      }
    },
    pressKey(e, index, item) {
      // if (this.shouldLockKeyupEvent) return;
      if (this.prenentKeycode === e.code) return;
      switch (e.key) {
        case "Backspace":
          if (e.currentTarget.selectionStart === 0) {
            if (!this.firstFlag[index].start) {
              this.isCodeFoucus = true;
              this.firstFlag[index === 0 ? 3 : index - 1].end = false;
              this.$refs.ipInput[index === 0 ? 3 : index - 1].focus();
            } else {
              this.firstFlag[index].start = false;
              this.firstFlag[index].end =
                item.value.toString().length !== e.currentTarget.selectionStart;
            }
          } else {
            this.firstFlag[index].start = true;
            this.firstFlag[index].end =
              item.value.toString().length !== e.currentTarget.selectionStart;
          }
          break;
        // case "Enter":
        //   this.isCodeFoucus = true;
        //   this.$refs.ipInput[index === 3 ? 0 : index + 1].focus();
        //   break;
        case ".":
          if (e.currentTarget.selectionStart === 0) {
            break;
          }
        case "ArrowRight":
          if (item.value.toString().length === e.currentTarget.selectionStart) {
            if (!this.firstFlag[index].end) {
              this.isCodeFoucus = true;
              this.firstFlag[index === 3 ? 0 : index + 1].start = false;
              this.$refs.ipInput[index === 3 ? 0 : index + 1].focus();
            } else {
              this.firstFlag[index].end = false;
              this.firstFlag[index].start = true;
            }
          } else {
            this.firstFlag[index].end = true;
            this.firstFlag[index].start = true;
          }
          break;
        case "ArrowLeft":
          if (e.currentTarget.selectionStart === 0) {
            if (!this.firstFlag[index].start) {
              this.isCodeFoucus = true;
              // this.firstFlag[index === 0 ? 3 : index - 1].start = false;
              this.firstFlag[index === 0 ? 3 : index - 1].end = false;
              this.$refs.ipInput[index === 0 ? 3 : index - 1].focus();
            } else {
              this.firstFlag[index].start = false;
              this.firstFlag[index].end = true;
            }
          } else {
            this.firstFlag[index].start = true;
            this.firstFlag[index].end = true;
          }
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped lang="less">
.fan-ip-addr {
  display: inline-flex;
  list-style: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 0px 10px;
  justify-content: space-around;
  width: 190px;
  height: 32px;

  & .fan-ip-item {
    line-height: 32px;

    & .fan-ip-dot {
      display: inline-block;
      width: 2px;
      height: 2px;
      background: #9b8d8d;
      border-radius: 50%;
      box-shadow: 0 0 0 1px #fff;
    }

    & .fan-ip-input {
      border: none;
      width: 40px;
      position: relative;
      padding: 3px 8px;

      &:focus {
        box-shadow: none;
      }
    }
  }
}
</style>