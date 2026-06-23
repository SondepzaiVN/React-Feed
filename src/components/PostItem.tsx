//Interface cho thuộc tính "content"
export default function PostItem() {
  // Khởi tạo useState
  /* --- CODE HERE --- */

  // Tạo hàm cập nhật giá trị
  /* --- CODE HERE --- */

  return (
    <div className="post-card">
      <div className="post-header">
        {/* Thẻ img thể hiện ảnh Avatar */}
        {/* --- CODE HERE --- */}

        {/* Thẻ h4 ghi tên tài khoản */}
        {/* --- CODE HERE --- */}
      </div>

      {/* Thẻ p với class "post-content" và thể hiện content được đưa vào */}
      {/* --- CODE HERE --- */}

      <div className="post-actions">
        {/* 1. Thẻ button class sẽ là toán tử điều kiện ba ngôi quyết định class là "liked" hoặc "" */}
        {/* 2. Thẻ button có thuộc tính onClick là hàm cập nhật giá trị ở trên */}
        {/* 3. Thẻ button thể hiện "👍 Thích (số like)" */}
        {/* 4. nâng cao: thể hiện "👍 Thích (số like)" nếu like > 0 ngược chỉ thể hiện "👍 Thích" */}
        {/* gợi ý: dùng toán tử && */}
        {/* 5. nâng cao: thẻ button mang class "like" nếu > 0 ngược lại mang class "" */}
        {/* gợi ý: dùng toán tử ba ngôi " điều kiện ? trả về nếu đúng :  trả về nếu sai" */}
        <button>💬 Bình luận</button>
      </div>
    </div>
  );
}
