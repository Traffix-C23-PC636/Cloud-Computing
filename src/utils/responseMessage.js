// File: responseMessages.js

// Pesan-pesan respons sukses
const successMessages = {
    success: 'Sukses',
    welcome: 'Welcome to Traffix REST API',
    dataRetrieved: 'Data berhasil diambil',
    dataCreated: 'Data berhasil dibuat',
    dataUpdated: 'Data berhasil diperbarui',
    dataDeleted: 'Data berhasil dihapus',
};

// Pesan-pesan respons kesalahan
const errorMessages = {
    serverError: 'Terjadi gangguan di server',
    unauthorized: 'Akses tidak diizinkan',
    notFound: 'Data tidak ditemukan',
    databaseError: 'Terjadi kesalahan pada database',
};

// Pesan-pesan respons untuk akses tidak diizinkan
const unauthorizedMessages = {
    missingToken: 'Token tidak ditemukan',
    expiredToken: 'Token sudah kadaluarsa',
    tokenInvalid: 'Maaf, token tidak valid',
    invalidPermissions: 'Izin tidak valid',
};

// Pesan-pesan respons untuk kesalahan validasi data
const validationErrorMessages = {
    missingField: (field) => 'Kolom {field} wajib diisi',
    invalidEmail: 'Email tidak valid',
    passwordTooShort: (minLength) => 'Panjang kata sandi minimal {minLength} karakter',
    confirmPasswordMismatch: 'Konfirmasi kata sandi tidak sesuai',
};

export {
    successMessages,
    errorMessages,
    unauthorizedMessages,
    validationErrorMessages,
};
