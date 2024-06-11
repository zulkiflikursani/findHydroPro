interface AkunType {
  id: number;
  kode_akun_header: string;
  nama_akun_header: string;
  saldo_normal: string;
  company: string;
  kode_akun: string;
  nama_akun: string;
}

interface AkunHeaderType {
  kode_akun_header: string;
  nama_akun_header: string;
}

interface AkunDetailType {
  kode_akun_header: string;
  kode_akun: string;
  nama_akun: string;
}

interface ProdukType {
  id: number;
  company: string;
  kode_produk: string;
  nama_produk: string;
  deskripsi: string;
  harga_beli: number;
  harga_jual: number;
}

interface DetailPembelianType {
  kode_produk: string;
  nama_produk: string;
  qty: number;
  harga_beli: number;
}

interface TransaksiHeaderType {
  company: string;
  kode_transaksi: string;
  tgl_transaksi: string;
  jenis_transaksi: string;
  deskripsi: string;
  user: string;
  data: TransaksiDetailType[];
}

interface TransaksiDetailType {
  kode_transaksi: string;
  no_akun: string;
  kode_produk: string;
  qty: number;
  harga: number;
}
