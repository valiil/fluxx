import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

interface Usuario {
  tipo: 'transportador' | 'empresa';
  nombre: string;
  documento?: string;
  telefono: string;
  licencia?: string;
  nit?: string;
  direccion?: string;
}

@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './gestion-usuarios.html',
  styleUrls: ['./gestion-usuarios.css']
})
export class GestionUsuarios {
  @ViewChild('tipoUsuario') tipoUsuario!: ElementRef;
  @ViewChild('nombre') nombre!: ElementRef;
  @ViewChild('documento') documento!: ElementRef;
  @ViewChild('telefono') telefono!: ElementRef;
  @ViewChild('licencia') licencia!: ElementRef;
  @ViewChild('nit') nit!: ElementRef;
  @ViewChild('direccion') direccion!: ElementRef;

  usuarios: Usuario[] = [];
  editIndex: number | null = null;
  tipoSeleccionado: string = '';

  ngOnInit() {
    const datos = localStorage.getItem('usuarios');
    if (datos) {
      this.usuarios = JSON.parse(datos);
    }
  }

  actualizarTipo() {
    this.tipoSeleccionado = this.tipoUsuario.nativeElement.value;
  }

  guardar() {
    const tipo = this.tipoUsuario.nativeElement.value;
    const nombre = this.nombre.nativeElement.value.trim();
    const telefono = this.telefono.nativeElement.value.trim();

    if (!tipo || !nombre || !telefono) {
      alert('Por favor complete todos los campos obligatorios.');
      return;
    }

    if (tipo === 'transportador') {
      const documento = this.documento.nativeElement.value.trim();
      const licencia = this.licencia.nativeElement.value.trim();

      if (!documento || !licencia) {
        alert('Por favor complete todos los campos para transportador.');
        return;
      }

      const nuevoUsuario: Usuario = {
        tipo,
        nombre,
        telefono,
        documento,
        licencia
      };

      this.guardarUsuario(nuevoUsuario);
    } else if (tipo === 'empresa') {
      const nit = this.nit.nativeElement.value.trim();
      const direccion = this.direccion.nativeElement.value.trim();

      if (!nit || !direccion) {
        alert('Por favor complete todos los campos para empresa.');
        return;
      }

      const nuevoUsuario: Usuario = {
        tipo,
        nombre,
        telefono,
        nit,
        direccion
      };

      this.guardarUsuario(nuevoUsuario);
    }
  }

  guardarUsuario(usuario: Usuario) {
    if (this.editIndex !== null) {
      this.usuarios[this.editIndex] = usuario;
      this.editIndex = null;
    } else {
      this.usuarios.push(usuario);
    }

    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    this.limpiarFormulario();
  }

  editar(index: number) {
    const usuario = this.usuarios[index];
    this.tipoUsuario.nativeElement.value = usuario.tipo;
    this.tipoSeleccionado = usuario.tipo;
    this.nombre.nativeElement.value = usuario.nombre;
    this.telefono.nativeElement.value = usuario.telefono;

    if (usuario.tipo === 'transportador') {
      this.documento.nativeElement.value = usuario.documento || '';
      this.licencia.nativeElement.value = usuario.licencia || '';
    } else {
      this.nit.nativeElement.value = usuario.nit || '';
      this.direccion.nativeElement.value = usuario.direccion || '';
    }

    this.editIndex = index;
  }

  eliminar(index: number) {
    this.usuarios.splice(index, 1);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  limpiarFormulario() {
    this.tipoUsuario.nativeElement.value = '';
    this.tipoSeleccionado = '';
    this.nombre.nativeElement.value = '';
    this.telefono.nativeElement.value = '';
    this.documento.nativeElement.value = '';
    this.licencia.nativeElement.value = '';
    this.nit.nativeElement.value = '';
    this.direccion.nativeElement.value = '';
  }
}
