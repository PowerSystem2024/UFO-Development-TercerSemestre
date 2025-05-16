
package domain;

public abstract class FiguraGeometrica {
    protected String tipoFigura;

    protected FiguraGeometrica(String tipoFigura) {
        this.tipoFigura = tipoFigura;
    }
    // Método abstracto
    public abstract void dibujar();

    // Getter
    public String getTipoFigura() {
        return tipoFigura;
    }

    // Setter
    public void setTipoFigura(String tipoFigura) {
        this.tipoFigura = tipoFigura;
    }

    @Override
    public String toString() {
        return "FiguraGeometrica{ tipoFigura=" + tipoFigura + " }";
    }
    
}
