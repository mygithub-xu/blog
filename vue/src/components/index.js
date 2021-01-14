// 存放一些全局的组件
import menuTree from '@comp/common/menuTree.vue';
import Hamburger from '@comp/common/Hamburger.vue';//折叠样式图标
import breadcrumb from '@comp/common/Breadcrumb.vue';//面包屑
import screenfull from '@comp/common/Screenfull.vue';//全屏
import sizeSelect from '@comp/common/SizeSelect.vue';//布局大小组件
import treeSelect from '@comp/treeSelect/treeSelect.vue';//树形
import pagination from '@comp/pagination/index';//分页
import treeMultiSelect from '@comp/treeSelect/treeMultiSelect';//分页
import upload from '@comp/upload/upload';//头像组件
import uploadMore from '@comp/upload/uploadMore';//图片上传组件
import photoShow from '@comp/upload/photoShow';
import editor from '@comp/vueEditor/VueEditor';
import boxCard from '@comp/common/boxCard.vue';


//组件
import loHead from '@views/blog/layout/components/loHead';
import loFooter from '@views/blog/layout/components/loFooter';
import blogItem from '@views/blog/layout/components/blogItem';//blog
import blogContent from '@views/blog/layout/components/blogContent';//blog
import commentCom from '@views/blog/layout/components/commentCom';//blog

//全局注册icon-svg

const components = [
  menuTree,
  Hamburger,
  breadcrumb,
  screenfull,
  sizeSelect,
  treeSelect,
  treeMultiSelect,
  upload,
  pagination,
  loHead,
  loFooter,
  uploadMore,
  photoShow,
  editor,
  blogItem,
  blogContent,
  commentCom,
  boxCard
];

export default function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};