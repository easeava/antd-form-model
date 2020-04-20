import { Component, Vue } from 'vue-property-decorator';
import { FormModel } from 'ant-design-vue';

@Component
export default class App extends Vue {

  public form: Form = {
    user: '测试',
  };

  get formJson() {
    return JSON.stringify(this.form);
  }

  public rules: Rules = {
    user: [
      { required: true, message: '请输入姓名', trigger: 'blur' },
    ],
  };

  public submit(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();

    this.$message.info('提示');
    const refs = this.$refs.ruleForm as FormModel;

    refs.validate((valid) => {
      if (valid) {
        alert('submit!');
      } else {
        return false;
      }
    });
  }

  public render() {
    const { form, rules, formJson, submit } = this;

    return <div>
      <a-form-model ref='ruleForm' v-model={form} rules={rules}>
        <a-form-model-item label='姓名' prop='user'>
          <a-input v-model={form.user} />
        </a-form-model-item>
        <a-form-model-item>
          <a-button htmlType='submit' onClick={submit}>提交</a-button>
        </a-form-model-item>
      </a-form-model>;
      {formJson}
    </div > ;
  }
}
