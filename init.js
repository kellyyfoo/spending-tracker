function open_or_init_db(db_file, init_file_name) {
  if (!db_file.exists()) {
    throw "No such file" + db_file;
  }

}