const {StructureBuilder} = require('sanity/structure');
const {MdArticle, MdWork} = require('react-icons/md');

const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Blog Posts')
        .icon(MdArticle)
        .child(
          S.documentTypeList('post')
            .title('Blog Posts')
            .filter('_type == "post"')
        ),
      S.listItem()
        .title('Portfolio Projects')
        .icon(MdWork)
        .child(
          S.documentTypeList('project')
            .title('Portfolio Projects')
            .filter('_type == "project"')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => {
          const id = item.getId();
          return id && !['post', 'project'].includes(id);
        }
      ),
    ]);

module.exports = deskStructure;
