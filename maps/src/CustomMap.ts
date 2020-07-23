// Instruction to every other class
// on how they can be an arguments to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

// 他の人がindex.tsからGoogle Mapを色々と操作しないように
// CustomMapとしてブラックボックス化する
export class CustomMap {
  // 修飾子をprivateにすることで外部から呼び出されないようにする
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi there!',
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
