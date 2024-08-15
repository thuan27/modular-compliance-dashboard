# Modular Compliance Dashboard

## Môi Trường Phát Triển

## Required

Node.js (phiên bản 14.x trở lên) - Preferably node 18
npm hoặc Yarn

React 18
Vite 5

**Cài Đặt Dự Án**

git clone https://github.com/username/modular-compliance-dashboard.git
cd modular-compliance-dashboard
npm install hoặc yarn install

**Cấu Hình AWS Amplify**
npm install -g @aws-amplify/cli
amplify configure

- Đăng nhập và tạo key theo hướng dẫn
- amplify init
- amplify add auth
- amplify push
- amplify add hosting
- amplify publish

**Chạy Ứng Dụng**
Run: npm run dev
Build: npm run build

**Tài Liệu Mã Nguồn**

🚀 Component: Các thành phần giao diện người dùng được tổ chức trong thư mục src/components.
🛠️ Redux: Cấu hình Redux và các slice state nằm trong thư mục src/redux.
📦 Element: Cấu hình các element dùng chung (input, table, loading...)
🚀 Asset: Lưu trữ các scss, images, sound...
🛠️ Type: Cấu hình interface

## Cấu Hình Redux

src/redux/store.ts: Cấu hình store Redux.
src/redux/globalSlice.ts: Quản lý trạng thái toàn cục như loading.

## Cấu Hình AWS Amplify

src/aws-exports.js: Cấu hình AWS Amplify cho dự án của bạn, bao gồm thông tin xác thực và các dịch vụ AWS.
