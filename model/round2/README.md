---
library_name: sentence-transformers
metrics:
- cosine_accuracy
- cosine_accuracy_threshold
- cosine_f1
- cosine_f1_threshold
- cosine_precision
- cosine_recall
- cosine_ap
pipeline_tag: sentence-similarity
tags:
- sentence-transformers
- sentence-similarity
- feature-extraction
- generated_from_trainer
- dataset_size:61501
- loss:ContrastiveLoss
widget:
- source_sentence: Thời gian tôi học tập ở nước ngoài có phải đóng BHYT hay không?
  sentences:
  - 'Điều 2. Mức đóng bảo hiểm y tế 1. Từ ngày 01 tháng 01 năm 2015, mức đóng bảo
    hiểm y tế hằng tháng của các đối tượng được quy định như sau:

    a) Bằng 4,5% tiền lương tháng của người lao động đối với đối tượng quy định tại
    Điểm a Khoản 1 Điều 12 sửa đổi, bổ sung của Luật Bảo hiểm y tế.

    Người lao động trong thời gian nghỉ việc hưởng chế độ thai sản theo quy định của
    pháp luật về bảo hiểm xã hội thì mức đóng hằng tháng bằng 4,5% tiền lương tháng
    của người lao động trước khi nghỉ thai sản;

    Người lao động trong thời gian nghỉ việc hưởng chế độ ốm đau từ 14 ngày trở lên
    trong tháng theo quy định của pháp luật về bảo hiểm xã hội thì không phải đóng
    bảo hiểm y tế nhưng vẫn được hưởng quyền lợi bảo hiểm y tế;

    Người lao động trong thời gian bị tạm giam, tạm giữ hoặc tạm đình chỉ công tác
    để điều tra, xem xét kết luận có vi phạm hay không vi phạm pháp luật thì mức đóng
    hằng tháng bằng 4,5% của 50% mức tiền lương tháng mà người lao động được hưởng
    theo quy định của pháp luật. Trường hợp cơ quan có thẩm quyền kết luận là không
    vi phạm pháp luật, người lao động phải truy đóng bảo hiểm y tế trên số tiền lương
    được truy lĩnh;

    Người lao động trong thời gian được cử đi học tập hoặc công tác tại nước ngoài
    thì không phải đóng bảo hiểm y tế; thời gian đó được tính là thời gian tham gia
    bảo hiểm y tế cho đến ngày có quyết định trở lại làm việc của cơ quan, tổ chức
    cử đi;

    Người lao động trong thời gian đi lao động tại nước ngoài thì không phải đóng
    bảo hiểm y tế; trong thời gian 60 ngày kể từ ngày nhập cảnh về nước nếu tham gia
    bảo hiểm y tế thì toàn bộ thời gian đi lao động tại nước ngoài và thời gian kể
    từ khi về nước đến thời điểm tham gia bảo hiểm y tế được tính là thời gian tham
    gia bảo hiểm y tế liên tục.

    Người lao động trong thời gian làm thủ tục chờ hưởng chế độ trợ cấp thất nghiệp
    theo quy định của Luật Việc làm nếu không tham gia bảo hiểm y tế theo các nhóm
    khác, thời gian đó được tính là thời gian tham gia bảo hiểm y tế.

    b) Bằng 4,5% mức lương cơ sở đối với đối tượng quy định tại Điểm b Khoản 1 Điều
    12 sửa đổi, bổ sung của Luật Bảo hiểm y tế.

    c) Bằng 4,5% tiền lương hưu, trợ cấp mất sức lao động đối với đối tượng quy định
    tại Điểm a Khoản 2 Điều 12 sửa đổi, bổ sung của Luật Bảo hiểm y tế.

    d) Bằng 4,5% mức lương cơ sở đối với đối tượng quy định tại Điểm b, Điểm c Khoản
    2 Điều 12 sửa đổi, bổ sung của Luật Bảo hiểm y tế và đối tượng quy định tại Khoản
    1 Điều 1 Nghị định này.

    đ) Bằng 4,5% tiền trợ cấp thất nghiệp đối với đối tượng quy định tại Điểm d Khoản
    2 Điều 12 sửa đổi, bổ sung của Luật Bảo hiểm y tế.

    e) Bằng 4,5% mức lương cơ sở đối với đối tượng quy định tại các Điểm b, c, d,
    đ, e, g, h, i, k, l, m và Điểm n Khoản 3; Khoản 4 và Khoản 5 Điều 12 sửa đổi,
    bổ sung của Luật Bảo hiểm y tế và đối tượng quy định tại Khoản 2 Điều 1 Nghị định
    này.

    Trường hợp trẻ em đủ 72 tháng tuổi mà chưa đến kỳ nhập học thì thẻ bảo hiểm y
    tế có giá trị sử dụng đến ngày 30 tháng 9 của năm đó mà không phải đóng bảo hiểm
    y tế.

    g) Mức đóng của tất cả các thành viên thuộc hộ gia đình theo quy định tại Khoản
    5 Điều 12 sửa đổi, bổ sung của Luật Bảo hiểm y tế như sau: Người thứ nhất đóng
    bằng 4,5% mức lương cơ sở; người thứ hai, thứ ba, thứ tư đóng lần lượt bằng 70%,
    60%, 50% mức đóng của người thứ nhất; từ người thứ năm trở đi đóng bằng 40% mức
    đóng của người thứ nhất.

    Đối với hộ gia đình được ngân sách nhà nước hỗ trợ mức đóng thì không áp dụng
    giảm trừ mức đóng theo quy định tại Điểm g Khoản 1 Điều này.

    2. Căn cứ vào tình hình thực tế, Bộ Y tế chủ trì, phối hợp với Bộ Tài chính, cơ
    quan, tổ chức có liên quan trình Chính phủ điều chỉnh mức đóng bảo hiểm y tế nhằm
    bảo đảm cân đối quỹ bảo hiểm y tế.'
  - 'Điều 52. Đánh giá hồ sơ dự thầu và thương thảo hợp đồng giai đoạn hai 1. Việc
    đánh giá hồ sơ dự thầu và thương thảo hợp đồng giai đoạn hai thực hiện theo quy
    định tại Điều 18 và Điều 19 của Nghị định này; không đánh giá lại những nội dung
    đã thống nhất về kỹ thuật ở giai đoạn một.

    2. Nhà thầu đáp ứng yêu cầu kỹ thuật trong giai đoạn hai sẽ được xem xét đánh
    giá về tài chính. Việc đánh giá về tài chính thực hiện trên cơ sở đề xuất về tài
    chính của nhà thầu trong giai đoạn một và đề xuất về tài chính trong giai đoạn
    hai; căn cứ đề xuất về kỹ thuật của nhà thầu trong giai đoạn một và những đề xuất
    về kỹ thuật hiệu chỉnh của nhà thầu trong giai đoạn hai.'
  - 'Điều 2. Đối tượng áp dụng Thông tư này áp dụng đối với:

    1. Sĩ quan, hạ sĩ quan Cảnh sát giao thông (sau đây viết gọn là cán bộ) thực hiện
    nhiệm vụ tuần tra, kiểm soát giao thông đường bộ.

    2. Công an các đơn vị, địa phương có liên quan.

    3. Cơ quan, tổ chức, cá nhân có liên quan đến hoạt động giao thông đường bộ trên
    lãnh thổ nước Cộng hòa xã hội chủ nghĩa Việt Nam.'
- source_sentence: Nhiệm vụ và quyền hạn của chuyên gia khảo sát thực tế và tư vấn
    cho đoàn đánh giá ngoài chất lượng giáo dục nghề nghiệp được quy định như thế
    nào?
  sentences:
  - 'Điều 23. Trách nhiệm của tổ chức, cá nhân liên quan đến hồ sơ đăng ký chào bán
    chứng khoán ra công chúng 1. Tổ chức phát hành phải chịu trách nhiệm trước pháp
    luật về tính chính xác, trung thực và đầy đủ của hồ sơ đăng ký chào bán chứng
    khoán ra công chúng.

    2. Tổ chức tư vấn phát hành, tổ chức bảo lãnh phát hành, tổ chức kiểm toán được
    chấp thuận, người ký báo cáo kiểm toán và bất kỳ tổ chức, cá nhân nào xác nhận
    hồ sơ phải chịu trách nhiệm trước pháp luật trong phạm vi liên quan đến hồ sơ
    đăng ký chào bán chứng khoán ra công chúng.'
  - Điều 11. Cung cấp thông tin, dữ liệu đo đạc và bản đồ trong các trường hợp đặc
    biệt khẩn cấp Trong trường hợp đặc biệt khẩn cấp, khi có công điện của Thủ tướng
    Chính phủ, Bộ trưởng Bộ Quốc phòng, Chủ tịch Ủy ban nhân dân cấp tỉnh thì cơ quan
    có thẩm quyền cung cấp thông tin, dữ liệu đo đạc và bản đồ phải thực hiện ngay
    việc cung cấp. Việc hoàn tất hồ sơ, thủ tục theo quy định phải được thực hiện
    trong thời hạn ba mươi (30) ngày kể từ ngày cung cấp.
  - 'Điều 8. Tổ chức, hoạt động và trách nhiệm, quyền hạn của Đoàn đánh giá 1. Đoàn
    đánh giá có tối đa 05 thành viên, gồm: Trưởng đoàn là đại diện cơ quan thẩm định
    và các thành viên là đại diện một số Bộ, ngành hoặc Sở Tài nguyên và Môi trường
    có liên quan và các chuyên gia có chuyên môn, kinh nghiệm trong lĩnh vực quan
    trắc môi trường.

    2. Trách nhiệm của các thành viên trong Đoàn đánh giá:

    a) Các thành viên Đoàn đánh giá có trách nhiệm thẩm định, đánh giá chính xác,
    khách quan các điều kiện hoạt động dịch vụ quan trắc môi trường theo quy định
    tại Điều 8, Điều 9 Nghị định số 127/2014/NĐ-CP ngày 31 tháng 12 năm 2014 của Chính
    phủ;

    b) Nghiên cứu hồ sơ, tài liệu và giúp cơ quan thẩm định thực hiện kiểm tra, đánh
    giá thực tế tại tổ chức đề nghị chứng nhận đủ điều kiện hoạt động dịch vụ quan
    trắc môi trường;

    c) Quản lý hồ sơ, tài liệu được cung cấp theo quy định của pháp luật, bảo đảm
    không thất thoát, không chuyển thông tin cho bên thứ ba và nộp lại toàn bộ hồ
    sơ, tài liệu này cho Cơ quan thẩm định sau khi hoàn thành nhiệm vụ; không sử dụng
    kết quả kiểm tra, đánh giá trái quy định của pháp luật về sở hữu trí tuệ;

    d) Lập Phiếu đánh giá, kiểm tra tại tổ chức theo Mẫu số 2 Phụ lục 1 ban hành kèm
    theo Thông tư này và tổng hợp Biên bản đánh giá, kiểm tra tại tổ chức theo Mẫu
    số 3 Phụ lục 1 ban hành kèm theo Thông tư này;

    đ) Tham gia các cuộc họp do cơ quan thẩm định triệu tập và các cuộc họp của Hội
    đồng thẩm định; hoàn thiện Biên bản thông qua các phiên họp chuyên đề trong trường
    hợp cần thiết;

    e) Chịu trách nhiệm trước pháp luật về tính khách quan, trung thực của các nhận
    xét, đánh giá thẩm định điều kiện hoạt động dịch vụ quan trắc môi trường và những
    nội dung công việc được phân công trong quá trình thẩm định.

    3. Quyền hạn của các thành viên Đoàn đánh giá:

    a) Được cung cấp đầy đủ các tài liệu, thông tin liên quan đến tổ chức đề nghị
    chứng nhận đủ điều kiện hoạt động dịch vụ quan trắc môi trường; đề xuất tổ chức
    các cuộc họp và hoạt động khác để phục vụ trực tiếp cho công việc thẩm định;

    b) Được hưởng thù lao theo chế độ tài chính hiện hành khi thực hiện nhiệm vụ,
    được thanh toán các khoản chi phí đi lại, ăn, ở và các chi phí khác theo quy định
    của pháp luật khi tham gia các hoạt động của Đoàn đánh giá.

    4. Trách nhiệm và quyền hạn của Trưởng đoàn đánh giá:

    Ngoài trách nhiệm và quyền hạn của thành viên Đoàn đánh giá theo quy định tại
    Khoản 2, Khoản 3 Điều này, Trưởng đoàn đánh giá còn có trách nhiệm và quyền hạn
    sau:

    a) Điều hành mọi hoạt động của Đoàn đánh giá và phân công công việc cho các thành
    viên trong Đoàn đánh giá trong thời gian thực hiện nhiệm vụ;

    b) Điều khiển phiên họp của Đoàn đánh giá theo quy định của Thông tư này và pháp
    luật có liên quan;

    c) Tổng hợp, xử lý các ý kiến trao đổi thảo luận tại các phiên họp của Đoàn đánh
    giá và công bố kết quả kiểm tra, đánh giá tại tổ chức của Đoàn đánh giá; ký biên
    bản các cuộc họp của Đoàn đánh giá và chịu trách nhiệm về các nội dung trong biên
    bản các cuộc họp của Đoàn đánh giá;

    d) Trong trường hợp Trưởng đoàn không thể tham gia Đoàn đánh giá, Trưởng đoàn
    phải có văn bản ủy quyền cho một thành viên trong Đoàn đánh giá làm Trưởng đoàn
    và người được ủy quyền có trách nhiệm, quyền hạn như của Trưởng đoàn đánh giá.

    5. Đoàn đánh giá làm việc theo nguyên tắc tập thể, thảo luận công khai, trực tiếp
    giữa các thành viên của Đoàn đánh giá và thể hiện ý kiến trên Phiếu đánh giá,
    kiểm tra tại tổ chức hoạt động dịch vụ quan trắc môi trường.'
- source_sentence: Mức phạt khi sử dụng trái phép đất của đường bộ ở đoạn đường ngoài
    đô thị làm nơi sửa chữa phương tiện, máy móc, thiết bị
  sentences:
  - 'Điều 6. Hàng hóa cấm nhập khẩu 1. Hàng hóa có nội dung:

    a) Kích động nhân dân chống lại Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam; phá
    hoại khối đoàn kết toàn dân;

    b) Tuyên truyền, kích động bạo lực, chiến tranh xâm lược, gây hận thù giữa các
    dân tộc và nhân dân các nước; truyền bá tư tưởng, văn hóa phản động, lối sống
    dâm ô đồi trụy, các hành vi tội ác, tệ nạn xã hội, mê tín dị đoan, trái với thuần
    phong mỹ tục, gây hại cho sức khoẻ và hủy hoại môi trường sinh thái;

    c) Tiết lộ bí mật của Đảng, Nhà nước, bí mật quân sự, an ninh, kinh tế, đối ngoại,
    bí mật đời tư của cá nhân và bí mật khác do pháp luật quy định;

    d) Xuyên tạc sự thật lịch sử; phủ nhận thành tựu cách mạng; xúc phạm dân tộc,
    vĩ nhân, anh hùng dân tộc; vu khống, xúc phạm uy tín của cơ quan, tổ chức, danh
    dự và nhân phẩm của cá nhân;

    đ) Không phù hợp với giá trị đạo đức, văn hóa và truyền thống của dân tộc.

    2. Các sản phẩm văn hóa đã có quyết định đình chỉ lưu hành, cấm lưu hành, thu
    hồi, tịch thu, tiêu hủy hoặc vi phạm các quy định của pháp luật về quyền tác giả
    và quyền liên quan.'
  - 'Điều 16. Vi phạm quy định về điều kiện bảo đảm an toàn thực phẩm trong kinh doanh
    thức ăn đường phố 1. Phạt tiền từ 500.000 đồng đến 1.000.000 đồng đối với một
    trong các hành vi sau đây:

    a) Không có bàn, tủ, giá, kệ, thiết bị, dụng cụ đáp ứng theo quy định của pháp
    luật để bày bán thức ăn;

    b) Thức ăn không được che đậy ngăn chặn bụi bẩn; có côn trùng, động vật gây hại
    xâm nhập;

    c) Không sử dụng găng tay khi tiếp xúc trực tiếp với thực phẩm chín, thức ăn ngay.

    2. Phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng đối với một trong các hành vi
    sau đây:

    a) Sử dụng dụng cụ chế biến, ăn uống, vật liệu bao gói, chứa đựng tiếp xúc trực
    tiếp với thực phẩm không bảo đảm an toàn thực phẩm theo quy định của pháp luật;

    b) Người đang mắc các bệnh mà theo quy định của pháp luật không được trực tiếp
    tham gia kinh doanh thức ăn đường phố;

    c) Sử dụng phụ gia thực phẩm được sang chia, san chiết không phù hợp quy định
    của pháp luật để chế biến thức ăn;

    d) Sử dụng nước không bảo đảm vệ sinh để chế biến thức ăn; để vệ sinh trang thiết
    bị, dụng cụ phục vụ chế biến, ăn uống;

    đ) Vi phạm các quy định khác về điều kiện bảo đảm an toàn thực phẩm theo quy định
    của pháp luật trong kinh doanh thức ăn đường phố, trừ các hành vi quy định tại
    khoản 1, các điểm a, b, c và d khoản 2 Điều này.

    3. Biện pháp khắc phục hậu quả:

    Buộc tiêu hủy thực phẩm đối với vi phạm quy định tại điểm c khoản 2 Điều này.'
  - 'Điều 6. Nơi quản lý phương tiện phòng cháy và chữa cháy 1. Xe chữa cháy, xe chuyên
    dùng phục vụ chữa cháy, máy bơm chữa cháy phải được để trong nhà có mái che; tàu,
    xuồng chữa cháy phải được bố trí bến đậu bảo đảm yêu cầu hoạt động của phương
    tiện.

    2. Các phương tiện phòng cháy và chữa cháy khác phải được quản lý an toàn, bảo
    đảm sẵn sàng chữa cháy.

    3. Nơi quản lý phương tiện phòng cháy và chữa cháy phải bảo đảm an toàn về phòng,
    chống cháy, nổ và đáp ứng các điều kiện về bảo vệ môi trường.

    4. Người đứng đầu cơ quan, tổ chức, cơ sở được trang bị phương tiện phòng cháy
    và chữa cháy có trách nhiệm tổ chức và bố trí người làm công tác quản lý phương
    tiện phòng cháy và chữa cháy.'
- source_sentence: Chi phí điều tra tai nạn lao động hàng hải được quy định ra sao?
  sentences:
  - 'Điều 2. Tham gia hoạt động chữ thập đỏ của tổ chức, cá nhân 1. Tổ chức, cá nhân
    Việt Nam; tổ chức, cá nhân nước ngoài, tổ chức quốc tế khi tham gia hoạt động
    chữ thập đỏ ở một địa phương phải liên hệ với Hội Chữ thập đỏ tỉnh, thành phố
    trực thuộc Trung ương, Ủy ban nhân dân tỉnh, thành phố trực thuộc Trung ương để
    được hướng dẫn, thông tin về đối tượng, địa bàn nhu cầu và cách thức tổ chức hoạt
    động chữ thập đỏ; khi tham gia hoạt động chữ thập đỏ ở nhiều tỉnh, thành phố trực
    thuộc Trung ương thì phải liên hệ với Hội Chữ thập đỏ Việt Nam để được hướng dẫn,
    thông tin về đối tượng, địa bàn, nhu cầu và phối hợp thực hiện.

    2. Tổ chức, cá nhân nước ngoài, tổ chức quốc tế ở nước ngoài khi tham gia hoạt
    động chữ thập đỏ tại Việt Nam phải liên hệ với Hội Chữ thập đỏ Việt Nam để được
    hướng dẫn thủ tục, thông tin về đối tượng, địa bàn, nhu cầu và phối hợp thực hiện.

    3. Hội Chữ thập đỏ Việt Nam là đầu mối tiếp nhận và phối hợp với tổ chức, cá nhân
    nước ngoài, tổ chức quốc tế thực hiện các dự án quốc tế, tài trợ quốc tế và các
    hoạt động quốc tế khác liên quan đến hoạt động chữ thập đỏ trong trường hợp hoạt
    động chữ thập đỏ được thực hiện từ hai tỉnh, thành phố trực thuộc Trung ương trở
    lên. Hội Chữ thập đỏ tỉnh, thành phố trực thuộc Trung ương là đầu mối tiếp nhận
    và phối hợp thực hiện hoạt động chữ thập đỏ do tổ chức, cá nhân nước ngoài, tổ
    chức quốc tế thực hiện trong phạm vi tỉnh, thành phố trực thuộc Trung ương.'
  - 'Điều 41. Kinh phí cho hoạt động điều tra cơ bản, quy hoạch, bảo vệ tài nguyên
    nước 1. Kinh phí cho hoạt động điều tra cơ bản, quy hoạch, quản lý, bảo vệ tài
    nguyên nước được thực hiện theo quy định tại Khoản 1 Điều 10, Khoản 4 Điều 21,
    Khoản 5 Điều 27 của Luật tài nguyên nước.

    2. Bộ Tài nguyên và Môi trường chủ trì, phối hợp với Bộ Tài chính hướng dẫn việc
    quản lý, sử dụng kinh phí cho hoạt động điều tra cơ bản, quy hoạch, quản lý, bảo
    vệ tài nguyên nước.'
  - 'Điều 23. Thanh lý tài sản kết cấu hạ tầng giao thông đường thủy nội địa 1. Tài
    sản kết cấu hạ tầng giao thông đường thủy nội địa được thanh lý trong các trường
    hợp sau:

    a) Tài sản bị hư hỏng không thể sử dụng hoặc việc sửa chữa không có hiệu quả;

    b) Phá dỡ tài sản kết cấu hạ tầng giao thông đường thủy nội địa cũ để đầu tư xây
    dựng tài sản mới theo dự án được cấp có thẩm quyền phê duyệt;

    c) Cơ quan nhà nước có thẩm quyền điều chỉnh quy hoạch làm cho một phần hoặc toàn
    bộ tài sản kết cấu hạ tầng giao thông đường thủy nội địa không sử dụng được theo
    công năng của tài sản;

    d) Trường hợp khác theo quy định của pháp luật.

    2. Bộ trưởng Bộ Giao thông vận tải, Chủ tịch Ủy ban nhân dân cấp tỉnh quyết định
    hoặc phân cấp thẩm quyền quyết định thanh lý đối với tài sản kết cấu hạ tầng giao
    thông đường thủy nội địa thuộc phạm vi quản lý.

    3. Tài sản kết cấu hạ tầng giao thông đường thủy nội địa được thanh lý theo hình
    thức phá dỡ, hủy bỏ. Vật liệu, vật tư thu hồi từ việc phá dỡ, hủy bỏ được xử lý
    như sau:

    a) Giao cho cơ quan có tài sản thanh lý để sử dụng vào công tác bảo trì đối với
    tài sản còn sử dụng được: Bộ trưởng Bộ Giao thông vận tải, Chủ tịch Ủy ban nhân
    dân cấp tỉnh quyết định giao vật liệu, vật tư thu hồi đưa vào sử dụng; trong trường
    hợp này, giá trị vật liệu, vật tư được giảm trừ trong dự toán, Hợp đồng bảo trì;

    b) Điều chuyển cho cơ quan, tổ chức, đơn vị để quản lý, sử dụng: Bộ trưởng Bộ
    Giao thông vận tải, Chủ tịch Ủy ban nhân dân cấp tỉnh quyết định điều chuyển cho
    cơ quan, đơn vị thuộc phạm vi quản lý; Bộ trưởng Bộ Tài chính quyết định điều
    chuyển cho cơ quan, tổ chức, đơn vị ngoài Bộ Giao thông vận tải đối với tài sản
    thuộc trung ương quản lý, ngoài Ủy ban nhân dân cấp tỉnh đối với tài sản thuộc
    địa phương quản lý theo đề nghị của Bộ trưởng Bộ Giao thông vận tải, Chủ tịch
    Ủy ban nhân dân cấp tỉnh (nơi có tài sản), Bộ trưởng, Thủ trưởng cơ quan trung
    ương, Chủ tịch Ủy ban nhân dân cấp tỉnh có liên quan;

    c) Bán vật liệu, vật tư không có nhu cầu sử dụng.

    4. Hồ sơ đề nghị thanh lý tài sản kết cấu hạ tầng giao thông đường thủy nội địa
    gồm:

    a) Văn bản đề nghị thanh lý tài sản của cơ quan được giao quản lý tài sản: 01
    bản chính;

    b) Danh mục tài sản thanh lý theo Mẫu số 06 quy định tại Phụ lục ban hành kèm
    theo Nghị định này (trong đó nêu rõ lý do thanh lý): 01 bản chính;

    c) Các hồ sơ có liên quan khác (nếu có): 01 bản sao.

    5. Trình tự, thủ tục thanh lý tài sản kết cấu hạ tầng giao thông đường thủy nội
    địa:

    a) Cơ quan được giao quản lý tài sản lập 01 bộ hồ sơ đề nghị thanh lý quy định
    tại khoản 4 Điều này gửi cơ quan, người có thẩm quyền quy định tại khoản 2 Điều
    này xem xét, quyết định;

    b) Trong thời hạn 30 ngày, kể từ ngày nhận được đầy đủ hồ sơ hợp lệ, cơ quan người
    có thẩm quyền quy định tại khoản 2 Điều nay xem xét, quyết định thanh lý tài sản
    hoặc có văn bản hồi đáp trong trường hợp đề nghị thanh lý tài sản chưa phù hợp.
    Trường hợp vật liệu, vật tư thu hồi từ thanh lý tài sản được xử lý theo hình thức
    điều chuyển cho cơ quan, tổ chức, đơn vị ngoài Bộ Giao thông vận tải đối với tài
    sản thuộc trung ương quản lý, ngoài Ủy ban nhân dân cấp tỉnh đối với tài sản thuộc
    địa phương quản lý, Bộ Giao thông vận tải, Ủy ban nhân dân cấp tỉnh có văn bản
    đề nghị, gửi Bộ Tài chính xem xét, quyết định theo thẩm quyền;

    c) Quyết định thanh lý tài sản gồm những nội dung chủ yếu sau đây: Tên cơ quan
    được giao quản lý tài sản có tài sản thanh lý; danh mục tài sản thanh lý (tên
    tài sản, số lượng, nguyên giá, giá trị còn lại, lý do thanh lý); hình thức thanh
    lý; hình thức xử lý vật liệu, vật tư thu hồi; quản lý, sử dụng số tiền thu được
    từ thanh lý; trách nhiệm tổ chức thực hiện;

    d) Căn cứ Quyết định thanh lý tài sản của cơ quan, người có thẩm quyền, cơ quan
    được giao quản lý tài sản tổ chức thực hiện việc phá dỡ, hủy bỏ tài sản và xử
    lý vật liệu, vật tư thu hồi theo quy định. Việc bán vật liệu, vật tư thu hồi được
    thực hiện theo quy định tại Điều 31 Nghị định số 151/2017/NĐ-CP ngày 26 tháng
    12 năm 2017 của Chính phủ quy định chi tiết một số điều của Luật Quản lý, sử dụng
    tài sản công;

    đ) Sau khi hoàn thành việc thanh lý tài sản, cơ quan được giao quản lý tài sản
    thực hiện kế toán giảm tài sản, báo cáo kê khai biến động tài sản theo quy định
    tại Điều 27 Nghị định này và pháp luật có liên quan.'
- source_sentence: Đơn vị trực thuộc các Tổng công ty điện lực bao gồm những đơn vị
    nào?
  sentences:
  - 'Điều 23. Hành vi vi phạm các quy định khác liên quan đến quá trình điều tra và
    xử lý vụ việc cạnh tranh 1. Phạt tiền từ 10.000.000 đồng đến 20.000.000 đồng đối
    với một trong các hành vi sau đây:

    a) Tiết lộ thông tin, tài liệu thuộc bí mật điều tra;

    b) Gây rối tại phiên điều trần.

    2. Hình thức xử phạt bổ sung:

    Tịch thu tang vật, phương tiện được sử dụng để thực hiện hành vi vi phạm.'
  - Điều 8. Đối tượng tham gia đấu thầu tín phiếu Đối tượng được tham gia đấu thầu
    tín phiếu (sau đây gọi tắt là thành viên đấu thầu tín phiếu) là thành viên đấu
    thầu trái phiếu Chính phủ được Bộ Tài chính lựa chọn và công bố theo quy định
    tại Thông tư số 111/2015/TT-BTC ngày 28/7/2015 của Bộ Tài chính hướng dẫn phát
    hành trái phiếu Chính phủ tại thị trường trong nước (sau đây gọi tắt là Thông
    tư số 111/2015/TT-BTC) và các văn bản sửa đổi, bổ sung hoặc thay thế (nếu có).
  - Điều 4. Đơn vị đo kiểm thiết bị viễn thông, đài vô tuyến điện Đơn vị đo kiểm thiết
    bị viễn thông, đài vô tuyến điện (sau đây gọi là đơn vị đo kiểm) là đơn vị được
    thành lập, được cấp Giấy chứng nhận đăng ký hoạt động thử nghiệm chất lượng sản
    phẩm, hàng hóa theo quy định của pháp luật và được Bộ Thông tin và Truyền thông
    chỉ định đo kiểm đối với thiết bị viễn thông, đài vô tuyến điện.
model-index:
- name: SentenceTransformer
  results:
  - task:
      type: binary-classification
      name: Binary Classification
    dataset:
      name: Unknown
      type: unknown
    metrics:
    - type: cosine_accuracy
      value: 0.9675870348139256
      name: Cosine Accuracy
    - type: cosine_accuracy_threshold
      value: 0.771274209022522
      name: Cosine Accuracy Threshold
    - type: cosine_f1
      value: 0.5876777251184834
      name: Cosine F1
    - type: cosine_f1_threshold
      value: 0.7023106217384338
      name: Cosine F1 Threshold
    - type: cosine_precision
      value: 0.7126436781609196
      name: Cosine Precision
    - type: cosine_recall
      value: 0.5
      name: Cosine Recall
    - type: cosine_ap
      value: 0.6152579507001378
      name: Cosine Ap
---

# SentenceTransformer

This is a [sentence-transformers](https://www.SBERT.net) model trained. It maps sentences & paragraphs to a 768-dimensional dense vector space and can be used for semantic textual similarity, semantic search, paraphrase mining, text classification, clustering, and more.

## Model Details

### Model Description
- **Model Type:** Sentence Transformer
<!-- - **Base model:** [Unknown](https://huggingface.co/unknown) -->
- **Maximum Sequence Length:** 256 tokens
- **Output Dimensionality:** 768 dimensions
- **Similarity Function:** Cosine Similarity
<!-- - **Training Dataset:** Unknown -->
<!-- - **Language:** Unknown -->
<!-- - **License:** Unknown -->

### Model Sources

- **Documentation:** [Sentence Transformers Documentation](https://sbert.net)
- **Repository:** [Sentence Transformers on GitHub](https://github.com/UKPLab/sentence-transformers)
- **Hugging Face:** [Sentence Transformers on Hugging Face](https://huggingface.co/models?library=sentence-transformers)

### Full Model Architecture

```
SentenceTransformer(
  (0): Transformer({'max_seq_length': 256, 'do_lower_case': False}) with Transformer model: RobertaModel 
  (1): Pooling({'word_embedding_dimension': 768, 'pooling_mode_cls_token': False, 'pooling_mode_mean_tokens': True, 'pooling_mode_max_tokens': False, 'pooling_mode_mean_sqrt_len_tokens': False, 'pooling_mode_weightedmean_tokens': False, 'pooling_mode_lasttoken': False, 'include_prompt': True})
)
```

## Usage

### Direct Usage (Sentence Transformers)

First install the Sentence Transformers library:

```bash
pip install -U sentence-transformers
```

Then you can load this model and run inference.
```python
from sentence_transformers import SentenceTransformer

# Download from the 🤗 Hub
model = SentenceTransformer("sentence_transformers_model_id")
# Run inference
sentences = [
    'Đơn vị trực thuộc các Tổng công ty điện lực bao gồm những đơn vị nào?',
    'Điều 4. Đơn vị đo kiểm thiết bị viễn thông, đài vô tuyến điện Đơn vị đo kiểm thiết bị viễn thông, đài vô tuyến điện (sau đây gọi là đơn vị đo kiểm) là đơn vị được thành lập, được cấp Giấy chứng nhận đăng ký hoạt động thử nghiệm chất lượng sản phẩm, hàng hóa theo quy định của pháp luật và được Bộ Thông tin và Truyền thông chỉ định đo kiểm đối với thiết bị viễn thông, đài vô tuyến điện.',
    'Điều 8. Đối tượng tham gia đấu thầu tín phiếu Đối tượng được tham gia đấu thầu tín phiếu (sau đây gọi tắt là thành viên đấu thầu tín phiếu) là thành viên đấu thầu trái phiếu Chính phủ được Bộ Tài chính lựa chọn và công bố theo quy định tại Thông tư số 111/2015/TT-BTC ngày 28/7/2015 của Bộ Tài chính hướng dẫn phát hành trái phiếu Chính phủ tại thị trường trong nước (sau đây gọi tắt là Thông tư số 111/2015/TT-BTC) và các văn bản sửa đổi, bổ sung hoặc thay thế (nếu có).',
]
embeddings = model.encode(sentences)
print(embeddings.shape)
# [3, 768]

# Get the similarity scores for the embeddings
similarities = model.similarity(embeddings, embeddings)
print(similarities.shape)
# [3, 3]
```

<!--
### Direct Usage (Transformers)

<details><summary>Click to see the direct usage in Transformers</summary>

</details>
-->

<!--
### Downstream Usage (Sentence Transformers)

You can finetune this model on your own dataset.

<details><summary>Click to expand</summary>

</details>
-->

<!--
### Out-of-Scope Use

*List how the model may foreseeably be misused and address what users ought not to do with the model.*
-->

## Evaluation

### Metrics

#### Binary Classification

* Evaluated with [<code>BinaryClassificationEvaluator</code>](https://sbert.net/docs/package_reference/sentence_transformer/evaluation.html#sentence_transformers.evaluation.BinaryClassificationEvaluator)

| Metric                    | Value      |
|:--------------------------|:-----------|
| cosine_accuracy           | 0.9676     |
| cosine_accuracy_threshold | 0.7713     |
| cosine_f1                 | 0.5877     |
| cosine_f1_threshold       | 0.7023     |
| cosine_precision          | 0.7126     |
| cosine_recall             | 0.5        |
| **cosine_ap**             | **0.6153** |

<!--
## Bias, Risks and Limitations

*What are the known or foreseeable issues stemming from this model? You could also flag here known failure cases or weaknesses of the model.*
-->

<!--
### Recommendations

*What are recommendations with respect to the foreseeable issues? For example, filtering explicit content.*
-->

## Training Details

### Training Dataset

#### Unnamed Dataset


* Size: 61,501 training samples
* Columns: <code>sentence_0</code>, <code>sentence_1</code>, and <code>label</code>
* Approximate statistics based on the first 1000 samples:
  |         | sentence_0                                                                        | sentence_1                                                                           | label                                                          |
  |:--------|:----------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|:---------------------------------------------------------------|
  | type    | string                                                                            | string                                                                               | float                                                          |
  | details | <ul><li>min: 6 tokens</li><li>mean: 24.12 tokens</li><li>max: 46 tokens</li></ul> | <ul><li>min: 14 tokens</li><li>mean: 180.84 tokens</li><li>max: 256 tokens</li></ul> | <ul><li>min: 0.0</li><li>mean: 0.06</li><li>max: 1.0</li></ul> |
* Samples:
  | sentence_0                                                                                                                   | sentence_1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | label            |
  |:-----------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------|
  | <code>Thông tin về kết quả thi hành án trong cơ sở dữ liệu thi hành án HS được quy định như thế nào?</code>                  | <code>Điều 9. Báo cáo tình hình học sinh, sinh viên và kết quả thực hiện công tác giáo dục chính trị và công tác học sinh, sinh viên 1. Nội dung yêu cầu báo cáo: Tình hình học sinh, sinh viên; kết quả thực hiện công tác giáo dục chính trị và công tác học sinh, sinh viên; đánh giá chung; Phương hướng, nhiệm vụ trong học kỳ hoặc năm học tiếp theo; kiến nghị, đề xuất (nếu có).<br>2. Đối tượng thực hiện, cơ quan nhận báo cáo và quy trình báo cáo:<br>a) Phòng GDĐT báo cáo Sở GDĐT; Sở GDĐT báo cáo Bộ GDĐT;<br>b) Cơ sở giáo dục đại học báo cáo Bộ GDĐT.<br>3. Kỳ báo cáo: Báo cáo học kỳ I; báo cáo năm học.<br>4. Phương thức gửi, nhận báo cáo: Thực hiện theo quy định tại Điều 6 Thông tư này.<br>5. Thời gian chốt số liệu báo cáo:<br>a) Báo cáo sơ kết học kỳ I: Tính từ ngày bắt đầu năm học cho đến ngày kết thúc học kỳ I theo khung kế hoạch thời gian năm học hằng năm;<br>b) Báo cáo tổng kết năm học: Tính từ ngày bắt đầu năm học cho đến ngày kết thúc năm học theo khung kế hoạch thời gian năm học hằng năm.<br>6. Thời hạn gửi báo cáo...</code> | <code>0.0</code> |
  | <code>Ban Quản lý khu công nghiệp có được tiếp nhận thỏa ước lao động tập thể của doanh nghiệp trong khu công nghiệp?</code> | <code>Điều 5. Quản lý hoạt động dịch vụ việc làm 1. Trung tâm dịch vụ việc làm tiếp nhận đăng ký tư vấn, đăng ký tìm việc làm, đăng ký giới thiệu hoặc cung ứng lao động theo quy định tại khoản 1, khoản 2, khoản 4 Điều 5 Nghị định số 196/2013/NĐ-CP theo các mẫu số 01, 01a, 01b, 01c, 01d ban hành kèm theo Thông tư này.<br>2. Trung tâm dịch vụ việc làm, doanh nghiệp hoạt động dịch vụ việc làm theo dõi tình trạng việc làm của người lao động do Trung tâm dịch vụ việc làm, doanh nghiệp hoạt động dịch vụ việc làm giới thiệu hoặc cung ứng quy định tại khoản 6 Điều 8 Nghị định số 196/2013/NĐ-CP và khoản 3 Điều 5 Nghị định số 52/2014/NĐ-CP theo mẫu số 02 ban hành kèm theo Thông tư này.</code>                                                                                                                                                                                                                                                                                                                                                                 | <code>0.0</code> |
  | <code>Kê biên tài sản gắn liền với đất của pháp nhân thương mại như thế nào?</code>                                          | <code>Điều 22. Kê biên tài sản của pháp nhân thương mại đang do người thứ ba giữ 1. Trường hợp xác định người thứ ba đang giữ tài sản của pháp nhân thương mại, kể cả trường hợp tài sản được xác định bằng bản án, quyết định khác thì cơ quan thi hành án hình sự có thẩm quyền ra quyết định kê biên tài sản đó; trường hợp người thứ ba không tự nguyện giao tài sản thì cơ quan thi hành án hình sự có thẩm quyền cưỡng chế buộc họ phải giao tài sản để thi hành án.<br>2. Trường hợp tài sản kê biên đang cho thuê thì người thuê được tiếp tục thuê theo hợp đồng đã giao kết.</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | <code>0.0</code> |
* Loss: [<code>ContrastiveLoss</code>](https://sbert.net/docs/package_reference/sentence_transformer/losses.html#contrastiveloss) with these parameters:
  ```json
  {
      "distance_metric": "SiameseDistanceMetric.COSINE_DISTANCE",
      "margin": 0.5,
      "size_average": true
  }
  ```

### Training Hyperparameters
#### Non-Default Hyperparameters

- `eval_strategy`: steps
- `per_device_train_batch_size`: 16
- `per_device_eval_batch_size`: 16
- `num_train_epochs`: 10
- `fp16`: True
- `multi_dataset_batch_sampler`: round_robin

#### All Hyperparameters
<details><summary>Click to expand</summary>

- `overwrite_output_dir`: False
- `do_predict`: False
- `eval_strategy`: steps
- `prediction_loss_only`: True
- `per_device_train_batch_size`: 16
- `per_device_eval_batch_size`: 16
- `per_gpu_train_batch_size`: None
- `per_gpu_eval_batch_size`: None
- `gradient_accumulation_steps`: 1
- `eval_accumulation_steps`: None
- `torch_empty_cache_steps`: None
- `learning_rate`: 5e-05
- `weight_decay`: 0.0
- `adam_beta1`: 0.9
- `adam_beta2`: 0.999
- `adam_epsilon`: 1e-08
- `max_grad_norm`: 1
- `num_train_epochs`: 10
- `max_steps`: -1
- `lr_scheduler_type`: linear
- `lr_scheduler_kwargs`: {}
- `warmup_ratio`: 0.0
- `warmup_steps`: 0
- `log_level`: passive
- `log_level_replica`: warning
- `log_on_each_node`: True
- `logging_nan_inf_filter`: True
- `save_safetensors`: True
- `save_on_each_node`: False
- `save_only_model`: False
- `restore_callback_states_from_checkpoint`: False
- `no_cuda`: False
- `use_cpu`: False
- `use_mps_device`: False
- `seed`: 42
- `data_seed`: None
- `jit_mode_eval`: False
- `use_ipex`: False
- `bf16`: False
- `fp16`: True
- `fp16_opt_level`: O1
- `half_precision_backend`: auto
- `bf16_full_eval`: False
- `fp16_full_eval`: False
- `tf32`: None
- `local_rank`: 0
- `ddp_backend`: None
- `tpu_num_cores`: None
- `tpu_metrics_debug`: False
- `debug`: []
- `dataloader_drop_last`: False
- `dataloader_num_workers`: 0
- `dataloader_prefetch_factor`: None
- `past_index`: -1
- `disable_tqdm`: False
- `remove_unused_columns`: True
- `label_names`: None
- `load_best_model_at_end`: False
- `ignore_data_skip`: False
- `fsdp`: []
- `fsdp_min_num_params`: 0
- `fsdp_config`: {'min_num_params': 0, 'xla': False, 'xla_fsdp_v2': False, 'xla_fsdp_grad_ckpt': False}
- `fsdp_transformer_layer_cls_to_wrap`: None
- `accelerator_config`: {'split_batches': False, 'dispatch_batches': None, 'even_batches': True, 'use_seedable_sampler': True, 'non_blocking': False, 'gradient_accumulation_kwargs': None}
- `deepspeed`: None
- `label_smoothing_factor`: 0.0
- `optim`: adamw_torch
- `optim_args`: None
- `adafactor`: False
- `group_by_length`: False
- `length_column_name`: length
- `ddp_find_unused_parameters`: None
- `ddp_bucket_cap_mb`: None
- `ddp_broadcast_buffers`: False
- `dataloader_pin_memory`: True
- `dataloader_persistent_workers`: False
- `skip_memory_metrics`: True
- `use_legacy_prediction_loop`: False
- `push_to_hub`: False
- `resume_from_checkpoint`: None
- `hub_model_id`: None
- `hub_strategy`: every_save
- `hub_private_repo`: False
- `hub_always_push`: False
- `gradient_checkpointing`: False
- `gradient_checkpointing_kwargs`: None
- `include_inputs_for_metrics`: False
- `eval_do_concat_batches`: True
- `fp16_backend`: auto
- `push_to_hub_model_id`: None
- `push_to_hub_organization`: None
- `mp_parameters`: 
- `auto_find_batch_size`: False
- `full_determinism`: False
- `torchdynamo`: None
- `ray_scope`: last
- `ddp_timeout`: 1800
- `torch_compile`: False
- `torch_compile_backend`: None
- `torch_compile_mode`: None
- `dispatch_batches`: None
- `split_batches`: None
- `include_tokens_per_second`: False
- `include_num_input_tokens_seen`: False
- `neftune_noise_alpha`: None
- `optim_target_modules`: None
- `batch_eval_metrics`: False
- `eval_on_start`: False
- `eval_use_gather_object`: False
- `prompts`: None
- `batch_sampler`: batch_sampler
- `multi_dataset_batch_sampler`: round_robin

</details>

### Training Logs
| Epoch  | Step | Training Loss | cosine_ap |
|:------:|:----:|:-------------:|:---------:|
| 0.1301 | 500  | 0.0049        | -         |
| 0.2601 | 1000 | 0.0023        | -         |
| 0.3902 | 1500 | 0.0024        | -         |
| 0.5203 | 2000 | 0.0023        | -         |
| 0.6504 | 2500 | 0.0023        | 0.5696    |
| 0.7804 | 3000 | 0.0024        | -         |
| 0.9105 | 3500 | 0.0024        | -         |
| 1.0    | 3844 | -             | 0.6067    |
| 1.0406 | 4000 | 0.0022        | -         |
| 1.1707 | 4500 | 0.0023        | -         |
| 1.3007 | 5000 | 0.0017        | 0.5982    |
| 1.4308 | 5500 | 0.0017        | -         |
| 1.5609 | 6000 | 0.0017        | -         |
| 1.6909 | 6500 | 0.0015        | -         |
| 1.8210 | 7000 | 0.0017        | -         |
| 1.9511 | 7500 | 0.0016        | 0.5913    |
| 2.0    | 7688 | -             | 0.6153    |


### Framework Versions
- Python: 3.10.12
- Sentence Transformers: 3.3.1
- Transformers: 4.44.2
- PyTorch: 2.4.1+cu121
- Accelerate: 0.34.2
- Datasets: 3.2.0
- Tokenizers: 0.19.1

## Citation

### BibTeX

#### Sentence Transformers
```bibtex
@inproceedings{reimers-2019-sentence-bert,
    title = "Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks",
    author = "Reimers, Nils and Gurevych, Iryna",
    booktitle = "Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing",
    month = "11",
    year = "2019",
    publisher = "Association for Computational Linguistics",
    url = "https://arxiv.org/abs/1908.10084",
}
```

#### ContrastiveLoss
```bibtex
@inproceedings{hadsell2006dimensionality,
    author={Hadsell, R. and Chopra, S. and LeCun, Y.},
    booktitle={2006 IEEE Computer Society Conference on Computer Vision and Pattern Recognition (CVPR'06)},
    title={Dimensionality Reduction by Learning an Invariant Mapping},
    year={2006},
    volume={2},
    number={},
    pages={1735-1742},
    doi={10.1109/CVPR.2006.100}
}
```

<!--
## Glossary

*Clearly define terms in order to be accessible across audiences.*
-->

<!--
## Model Card Authors

*Lists the people who create the model card, providing recognition and accountability for the detailed work that goes into its construction.*
-->

<!--
## Model Card Contact

*Provides a way for people who have updates to the Model Card, suggestions, or questions, to contact the Model Card authors.*
-->