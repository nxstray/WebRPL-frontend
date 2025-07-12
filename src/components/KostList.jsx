import React, { useEffect, useState } from "react";
import axios from "axios";
import "./KostList.css"; // pakai CSS biasa

const KostList = () => {
  const [kosts, setKosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/kosts")
      .then((res) => setKosts(res.data))
      .catch((err) => console.error("Gagal fetch:", err));
  }, []);

  return (
    <div className="container">
      <header className="header">UGD KOST</header>

      <section className="intro">
        <p>Mau cari kos?</p>
        <p>Dapatkan infonya di <b>UGD KOST</b></p>
      </section>

      <div className="kost-list">
        {kosts.map((kost) => (
          <div key={kost.id} className="kost-card">
            <img src={kost.gambar_url} alt={kost.nama} />
            <div className="kost-info">
              <h3>{kost.nama}</h3>
              <p><b>Alamat:</b> {kost.alamat}</p>
              <p><b>Fasilitas:</b> {kost.fasilitas}</p>
              <p><b>Harga:</b> {kost.harga}</p>
              <a href={kost.maps_url} target="_blank" rel="noopener noreferrer">
                Lihat di Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KostList;