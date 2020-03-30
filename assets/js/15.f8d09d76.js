(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{214:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"python-flask-migrate-迁移数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-flask-migrate-迁移数据库"}},[t._v("#")]),t._v(" python flask-migrate 迁移数据库")]),t._v(" "),s("p",[t._v("Alembic（Database migration 数据迁移跟踪记录）提供的数据库升级和降级的功能。它所能实现的效果有如 Git 管理项目代码一般。")]),t._v(" "),s("p",[t._v("这里要用到俩个插件， 都安装下")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pip install Flask-Migrate\npip install Flask-Script \n")])])]),s("p",[t._v("官方文档给出的例子：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Flask\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask_sqlalchemy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SQLAlchemy\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask_script "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Manager\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask_migrate "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Migrate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MigrateCommand\n\napp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Flask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SQLALCHEMY_DATABASE_URI'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sqlite:///app.db'")]),t._v("\n\ndb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SQLAlchemy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化 migrate")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 两个参数一个是 Flask 的 app，一个是数据库 db")]),t._v("\nmigrate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Migrate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化管理器")]),t._v("\nmanager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加 db 命令，并与 MigrateCommand 绑定")]),t._v("\nmanager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'db'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MigrateCommand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建我们的数据模型")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" primary_key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("初始化 DB")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("python manage.py db init\n")])])]),s("p",[t._v("这里如果你的数据模型或者数据库连接是外部引用的要注意路径问题")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在上面加上这些指向根目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\ncurPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abspath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__file__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrootPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nsys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("查看指令 manager db 的可用选项")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(">>> python manage.py db\nusage: Perform database migrations\n\nPerform database migrations\n\npositional arguments:\n  {init,revision,migrate,edit,merge,upgrade,downgrade,show,history,heads,branches,current,stamp}\n    init                Creates a new migration repository\n    revision            Create a new revision file.\n    migrate             Alias for 'revision --autogenerate'\n    edit                Edit current revision.\n    merge               Merge two revisions together. Creates a new migration\n                        file\n    upgrade             Upgrade to a later version\n    downgrade           Revert to a previous version\n    show                Show the revision denoted by the given symbol.\n    history             List changeset scripts in chronological order.\n    heads               Show current available heads in the script directory\n    branches            Show current branch points\n    current             Display the current revision for each database.\n    stamp               'stamp' the revision table with the given revision;\n                        don't run any migrations\n\noptional arguments:\n  -?, --help            show this help message and exit\n")])])]),s("p",[t._v("基本上常用的命令就是：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('# 追踪生成版本 -m 后面的是自定义的别名\n>>> python manage.py db migrate -m "xxx"\n\n# 根据文件生成数据库 最新生成的记录\n>>> python manage.py db upgrade\n\n# 获取 History ID\n>>> python manage.py db history\n\n# 回滚到某个 history\n>>> python manage.py db downgrade <history_id>\n')])])]),s("p",[t._v("具体的内容可以看我的GitHub上的源码："),s("a",{attrs:{href:"https://github.com/huzidabanzhang/python-admin/blob/master/trunk/tools/manage.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/huzidabanzhang/python-admin/blob/master/trunk/tools/manage.py"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);