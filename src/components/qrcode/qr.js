const qrCode = new QRCodeStyling({
  type: "Canvas",
  data: "https://example.com",
  image: "",
  dotsOptions: {
    color: "#1fec71",
    type: "square"
  },
  backgroundOptions: {
    color: "#FFFFFF"
  }
});

const qrForm = document.getElementById("qrForm");
const dataInput = document.getElementById("dataInput");
const qrImage = document.getElementById("qrImage");
const qrColor = document.getElementById("qrColor");
const qrType = document.getElementById("qrType");

qrForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  updateQrCode();
});

const updateQrCode = () => {
  const data = dataInput.value;
  const image = qrImage.files[0];
  const color = qrColor.value;
  const type = qrType.value;

  qrCode.update({
    data: data,
    image: URL.createObjectURL(image),
    dotsOptions: {
      color: color,
      type: type
    }
  });
};

const download = () => {
  qrCode.download("jpeg");
};