// ui组件
// blog
import loHead from '@/views/blog/layout/components/loHead';
import loFooter from '@/views/blog/layout/components/loFooter';
import blogItem from '@/views/blog/layout/components/blogItem';
import blogContent from '@/views/blog/layout/components/blogContent';
import commentCom from '@/views/blog/layout/components/commentCom';
import blogItemPC from '@/views/blog/layout/components/blogItemPC';

// 存放一些全局的组件
import pagination from '@/components/common/pagination/index';//分页
import editor from '@/components/common/vueEditor/VueEditor';


//全局注册icon-svg

const components = [
  pagination,
  editor,
  loHead,
  loFooter,
  blogItem,
  blogContent,
  commentCom,
  blogItemPC
];

export default function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};