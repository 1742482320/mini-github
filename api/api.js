const base_url = 'https://api.github.com'

/** 封装 request */
const request = (url, method, data = '') => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: base_url + url,
            method: method,
            data: data,
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                resolve(res)
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
}

/** 
 * @parms username 用户名
 * @parms repositoriesName 仓库名
 * @parms path 文件路径
 * @parms number issues id
 * @parms conmontId comment id
*/
module.exports = {
    login: (userName) => {
        return request(`/users/${userName}`, 'get')
    },
    /** 获取个人仓库列表 */
    getRepositories: (data) => {
        return request(`/users/${data.userName}/repos`, 'get')
    },
    /** 获取仓库详情 */
    getRepositoriesDetail: (data) => {
        return request(`/repos/${data.userName}/${data.repositoriesName}`, 'get')
    },
    /** 获取仓库目录列表 */
    getRepositoriesList: (data) => {
        return request(`/repositories/${data.repositoriesName}/contents`, 'get')
    },
    /** 获取仓库子目录 */
    getRepositoriesFolder: (data) => {
        return request(`/repositories/${data.repositoriesName}/contents/${data.path}`, 'get')
    },
    /** 获取仓库文件信息 */
    getRepositoriesFile: (data) => {
        return request(`/repositories/${data.repositoriesName}/contents/${data.path}`, 'get')
    },
    /** 获取仓库 commit 列表 */
    getRepositoriesCommits: (data) => {
        return request(`/repos/${data.userName}/${data.repositoriesName}/commits`, 'get')
    },
    /** 获取仓库 commit 详情 */
    getRepositoriesCommitsDetail: (data) => {
        return request(`/repos/${data.userName}/${data.repositoriesName}/commits/${data.sha}`, 'get')
    },
    /** 获取仓库 issue 列表 */
    getRepositoriesIssues: (data) => {
        return request(`/repos/${data.userName}/${data.repositoriesName}/issues`, 'get')
    }
    ,
    /** 获取仓库 issue 详情 */
    getRepositoriesIssuesDetail: (data) => {
        return request(`/repos/${data.userName}/${data.repositoriesName}/issues/${data.number}`, 'get')
    },
    /** 获取仓库 issue 评论 */
    getRepositoriesIssuesComments: (data) => {
        return request(`/repos/${data.userName}/${data.repositoriesName}/issues/${data.number}`, 'get')
    },
    /** 获取仓库 issue 评论 */
    getRepositoriesCommentsDetail: (data) => {
        return request(`/repos/${data.userName}/${data.repositoriesName}/issues/comments/${data.conmontId}`, 'get')
    },
    /** 获取个人收藏 */
    getStarred: (data) => {
        return request(`/users/${data.userName}/starred`, 'get')
    },
}