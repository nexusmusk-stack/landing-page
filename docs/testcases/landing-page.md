# QC Report: Landing Page Portfolio

## Mục tiêu kiểm thử
Xác nhận rằng trang Landing Page hoạt động đúng như yêu cầu: hỗ trợ đa ngôn ngữ, hỗ trợ Dark/Light mode, giao diện responsive và các hiệu ứng animation mượt mà.

## Môi trường
- **Framework**: Next.js 15
- **Trình duyệt**: Chrome, Safari
- **Thiết bị**: Desktop, Mobile

## Kịch bản kiểm thử (Test Cases)

### 1. Kiểm tra Giao diện Tổng thể (UI/UX)
- [x] **TC01**: Các section (Hero, About, Skills, Projects, Footer) hiển thị đúng thiết kế Glassmorphism.
- [x] **TC02**: Các vi hiệu ứng cuộn trang (scroll animation) của Framer Motion hoạt động mượt mà.
- [x] **TC03**: Website hoàn toàn responsive trên các kích thước màn hình Mobile, Tablet, và Desktop.
- [x] **TC04**: Các thẻ Projects có hiệu ứng hover mượt mà (phóng to nhẹ).

### 2. Kiểm tra tính năng Đa ngôn ngữ (i18n)
- [x] **TC05**: Truy cập vào route `/en`, nội dung hiển thị tiếng Anh.
- [x] **TC06**: Nhấn Language Switcher và chọn `Tiếng Việt`, URL chuyển sang `/vi` và toàn bộ text được dịch sang tiếng Việt.
- [x] **TC07**: Thử chuyển đổi qua các ngôn ngữ khác (`fr`, `de`, `ja`) - tất cả nội dung được render chính xác mà không lỗi layout (ví dụ tiếng Đức hoặc tiếng Nhật).

### 3. Kiểm tra tính năng Dark/Light Mode
- [x] **TC08**: Nhấn Theme Switcher và chọn `Dark`, nền chuyển sang màu tối, các văn bản đổi màu sáng tương phản.
- [x] **TC09**: Chuyển sang `Light`, màu sáng trở lại.
- [x] **TC10**: Chuyển sang `System` và ứng dụng phản hồi theo cài đặt hệ điều hành (không xuất hiện flicker - giật sáng do Hydration warning).

## Kết luận
Tất cả các tính năng chính hoạt động tốt, không có lỗi biên dịch. QC PASSED.
