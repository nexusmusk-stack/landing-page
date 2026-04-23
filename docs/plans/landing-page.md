# Kế hoạch triển khai: Landing Page Portfolio Software Engineer

## 1. Tổng quan (Overview)
Xây dựng một trang Landing Page giới thiệu bản thân là một Software Engineer (Kỹ sư phần mềm). Trang web cần mang thiết kế hiện đại (Premium & Dynamic), hỗ trợ chế độ giao diện Sáng/Tối (Light/Dark mode) và đa ngôn ngữ (Tiếng Anh, Tiếng Việt, Tiếng Pháp, Tiếng Đức, Tiếng Nhật).

## 2. Dữ liệu & Mô hình (Data & Models)
- **Nội dung đa ngôn ngữ (i18n)**: Sử dụng cấu trúc từ điển JSON cho 5 ngôn ngữ (`en`, `vi`, `fr`, `de`, `ja`). Nội dung bao gồm:
  - Header (Navigation links, Theme toggle, Language switcher).
  - Hero section (Lời chào, Chức danh, Giới thiệu ngắn).
  - About (Thông tin cá nhân, định hướng).
  - Skills (Danh sách các công nghệ).
  - Projects (Một số dự án mẫu).
  - Contact (Thông tin liên hệ).
- **Trạng thái Theme**: Lưu trữ người dùng chọn (Light/Dark/System) vào Local Storage thông qua thư viện.

## 3. Chi tiết Kỹ thuật (Technical Details)
- **Framework Core**: Next.js (App Router), TypeScript theo đúng quy định của dự án (`rules/tech.md`).
- **Styling & UI**: 
  - Tailwind CSS + Shadcn UI (ưu tiên cho Button, Dropdown Menu).
  - Hiệu ứng **Glassmorphism**, Typography sử dụng phông chữ **Inter**.
- **Đa ngôn ngữ (i18n)**: `next-intl` để hỗ trợ đa ngôn ngữ trực tiếp qua server/client components.
- **Dark Mode**: `next-themes` (hỗ trợ chuyển đổi dark mode dễ dàng kết hợp với Tailwind).
- **Animations**: `framer-motion` để tạo các vi hiệu ứng (micro-animations) mượt mà khi người dùng cuộn trang hoặc hover vào các thành phần, đạt chuẩn "Dynamic Design" theo quy định (`rules/ui-design-guidelines.md`).

## 4. Danh sách Công việc (Task List)

- [x] **Phase 1: Khởi tạo và Cấu hình dự án (Coding)**
  - Khởi tạo Next.js (App Router) với Tailwind CSS.
  - Cài đặt và cấu hình `next-intl` với 5 ngôn ngữ (en, vi, fr, de, ja).
  - Cài đặt `next-themes` cho Dark/Light mode và `framer-motion` cho animations.
  - Khởi tạo Shadcn UI và cài đặt các components cơ bản (Button, DropdownMenu).

- [x] **Phase 2: Xây dựng Layout & Core Features (Coding)**
  - Tạo `ThemeProvider` và chức năng Toggle Theme.
  - Tạo Navbar với Logo, Navigation Links, Theme Switcher, và Language Switcher.
  - Tạo bộ khung file ngôn ngữ JSON (i18n dict) với dữ liệu demo chuyên nghiệp.

- [x] **Phase 3: Xây dựng Landing Page Sections (Coding)**
  - **Hero Section**: Tiêu đề lớn, hiệu ứng gõ chữ hoặc xuất hiện mượt mà, ảnh profile đại diện.
  - **About Section**: Thiết kế thẻ thông tin với hiệu ứng Glassmorphism.
  - **Skills Section**: Danh sách kỹ năng hiển thị dạng lưới (Grid) đẹp mắt.
  - **Projects/Experience Section**: Các thẻ dự án/kinh nghiệm hiển thị tinh tế (Hover vào phóng to nhẹ, đổi độ sáng).
  - **Footer**: Chân trang với liên kết mạng xã hội (GitHub, LinkedIn).

- [x] **Phase 4: Kỹ thuật viên Đánh giá & Tinh chỉnh (Technical Review)**
  - Self-review code, kiểm tra tính responsive trên thiết bị di động (Mobile-first).
  - Kiểm tra xem đổi ngôn ngữ và dark/light mode có hoạt động ổn định và mượt mà không.
  - Đảm bảo tuân thủ DRY, SOLID và UI Guidelines (Glassmorphism, Spacing, Padding).

- [x] **Phase 5: Kiểm thử chất lượng (QC Test)**
  - Build thử và chạy trên local server.
  - Ghi nhận báo cáo vào `docs/testcases/landing-page.md`.

- [x] **Phase 6: Hoàn thiện (Finalization)**
  - Cập nhật `memory.md`, tạo commit, và tóm tắt lại cho người dùng.
