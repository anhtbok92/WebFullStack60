### Tổng quan về git

- git chia ra làm 2 môi trường là Remote và Local.
    + Remote: là môi trường lưu trữ và phân phối source của project.
    + Local: là môi trường làm việc local của nhà phát triển, nó là 1 bản sao của source trên remote, giúp ta commit code cũng như các thao tác khác 1 cách nhanh hơn so với CVS, SVN,…
    
- Các lệnh git cơ bản
    + git clone <git_path>: clone source về local
    + git status: check branch status
    + git branch: list branch trên local
    + git branch -a: list branch cả trên local và remote
    + git checkout -b <branch_name>: tạo branch mới
    + git add <file_path1> <file_path2>: add file để commit
    + git commit -m "<commit_mess>": commit to local
    + git push <remote> <branch>: push to remote
    
### Sử dụng git trong thực tế

- The main branches (Những branch chính):
    + Là những branch tồn tại mãi mãi
    + Có 2 branch chính : develop, master
    + 2 branch trên phát triển và tồn tại song song nhau
- Supporting branches (những branch hỗ trợ)
    + Feature branches
    + Release branches
    + Hotfix branches
    
Chú ý : Mỗi 1 support branch sẽ có các quy định mà mục đích riêng bao gồm 2 công việc cần trả lời
    
        + Được checkout từ branch nào ?
        + Được merge vào branch nào ?

### Hệ thống branch

#### 1. Feature branch

- Checkout từ : develop
- Merge vào : develop
- Quy luật đặt tên: bất kể gì trừ master, develop, release-, hay hotfix-
- Tạo feature/branch

```angular2svg
$ git checkout -b feature/name_branch
```

#### 2. Release branches

- Checkout từ : develop
- Merge vào : develop và master.
- Quy tắc đặt tên: release-*

#### 3. Hotfix Branches

- Checkout từ : master
- Merge vào: develop and master
- Quy tắc đặt tên: hotfix-*

### Các repository thường được sử dụng thực tế

1. Github
2. Gitlab
3. Bitbucket

### Thực hành các lệnh git cơ bản trên github

- Ví dụ 1 : Tạo account trên github
- Ví dụ 2 : Add ssh key - khi push code không cần nhập username và password
- Ví dụ 3 : Thực hành git clone & git pull  
- Ví dụ 4 : 
    + Create branch : tạo branch mới
    + Switch branch : chuyển branch
    + Xem trạng thái các file code : git status
    + Thêm file chuẩn bị commit : git add .
    + First commit
    + Git push
- Ví dụ 5 :
    + Xem lịch sử commit : git log
    + Xem chi tiết thay đổi của lịch sử : git show commit_id
- Ví dụ 6:
    + Sửa conflict sử dụng rebase