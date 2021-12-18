### 配置别名
#### 配置文件状态
`git config --global.alias.st status`

#### 配置切换分支
`git config --global.alias.co checkout`

#### 配置添加文件/添加文件夹
`git config --global.alias.a add`

#### 配置 commit
`git config --global.alias.ci commit -m`

#### 配置 挂起
`git config --global.alias.sa stash`

### 撤销 commit
`git reset --hard <版本号>`

// 注意使用 --hard 参数会抛弃当前工作区的修改

// 使用 --soft 参数的话会回退到之前的版本，但是保留当前工作区的修改，可以重新提交